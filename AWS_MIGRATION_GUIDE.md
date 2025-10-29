# AWS Migration Guide - Nov 10, 2025

**Time Required:** 4-8 hours
**Cost:** ~$1-5/month for AWS services
**Result:** joshuamichaelhall.com hosted on AWS infrastructure

---

## Prerequisites Checklist

Before starting, ensure you have:
- [ ] AWS account created and payment method added
- [ ] AWS CLI installed (`brew install awscli` or download from AWS)
- [ ] AWS CLI configured (`aws configure` with access keys)
- [ ] Jekyll site builds successfully locally
- [ ] Domain currently pointing to GitHub Pages (we'll migrate DNS)

---

## Phase 1: Build Static Site (15 minutes)

### Step 1.1: Build Jekyll Site Locally

```bash
cd /Users/jmh/repos/joshuamichaelhall.github.io

# Install dependencies (if needed)
bundle install

# Build the site
bundle exec jekyll build

# Verify _site/ directory was created
ls -la _site/
```

**Checkpoint:** You should see HTML files in `_site/` directory

### Step 1.2: Test Build Locally (Optional)

```bash
# Serve locally to verify everything works
bundle exec jekyll serve

# Open http://localhost:4000 in browser
# Ctrl+C to stop when verified
```

---

## Phase 2: S3 Setup (30-45 minutes)

### Step 2.1: Create S3 Bucket

1. **Go to AWS Console** → S3
2. **Create bucket:**
   - Bucket name: `joshuamichaelhall.com` (must match your domain)
   - Region: `us-east-1` (recommended for CloudFront)
   - **Uncheck "Block all public access"** (we need public read)
   - Acknowledge the warning
   - Create bucket

### Step 2.2: Enable Static Website Hosting

1. Click on bucket `joshuamichaelhall.com`
2. Go to **Properties** tab
3. Scroll to **Static website hosting**
4. Click **Edit**
5. Enable static website hosting
6. Index document: `index.html`
7. Error document: `404.html`
8. Save changes
9. **Copy the bucket website endpoint URL** (you'll need this later)

### Step 2.3: Upload Site Files

**Option A: AWS Console (Easy)**

1. Go to **Objects** tab in your S3 bucket
2. Click **Upload**
3. Click **Add folder**
4. Navigate to `/Users/jmh/repos/joshuamichaelhall.github.io/_site/`
5. Select all files and folders inside `_site/`
6. Click **Upload**
7. Wait for upload to complete

**Option B: AWS CLI (Faster)**

```bash
cd /Users/jmh/repos/joshuamichaelhall.github.io

# Sync _site/ to S3 bucket
aws s3 sync _site/ s3://joshuamichaelhall.com --delete

# Set proper content types
aws s3 sync _site/ s3://joshuamichaelhall.com \
  --content-type "text/html" \
  --exclude "*" \
  --include "*.html" \
  --delete

aws s3 sync _site/ s3://joshuamichaelhall.com \
  --content-type "text/css" \
  --exclude "*" \
  --include "*.css" \
  --delete

aws s3 sync _site/ s3://joshuamichaelhall.com \
  --content-type "application/javascript" \
  --exclude "*" \
  --include "*.js" \
  --delete
```

### Step 2.4: Configure Bucket Policy for Public Read

1. Go to **Permissions** tab
2. Scroll to **Bucket policy**
3. Click **Edit**
4. Paste this policy (replace bucket name if different):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::joshuamichaelhall.com/*"
    }
  ]
}
```

5. Save changes

### Step 2.5: Test S3 Static Website

1. Go back to **Properties** tab
2. Scroll to **Static website hosting**
3. Click the **Bucket website endpoint URL**
4. Your site should load (without HTTPS or custom domain yet)

**Checkpoint:** Site loads at S3 endpoint (e.g., `http://joshuamichaelhall.com.s3-website-us-east-1.amazonaws.com`)

---

## Phase 3: CloudFront Distribution (30-45 minutes)

### Step 3.1: Request SSL Certificate in ACM

**IMPORTANT:** Must be done in `us-east-1` region for CloudFront

1. **AWS Console** → **Certificate Manager (ACM)**
2. **Switch region to us-east-1** (top right, even if your S3 is elsewhere)
3. Click **Request certificate**
4. Choose **Request a public certificate**
5. Domain names:
   - Add `joshuamichaelhall.com`
   - Add `www.joshuamichaelhall.com` (click "Add another name")
6. Validation method: **DNS validation** (recommended)
7. Click **Request**

### Step 3.2: Validate Certificate via DNS

1. Click on the certificate you just created
2. Under **Domains**, you'll see CNAME records to add
3. Click **Create records in Route 53** (if your domain is in Route 53)
   - OR manually add CNAME records to your DNS provider
4. Wait for validation (usually 5-30 minutes)
5. Certificate status should change to **Issued**

**Checkpoint:** Certificate status = "Issued" in ACM

### Step 3.3: Create CloudFront Distribution

1. **AWS Console** → **CloudFront**
2. Click **Create distribution**
3. **Origin domain:**
   - **DO NOT** select S3 bucket from dropdown
   - Instead, paste your S3 **website endpoint** (from Step 2.2)
   - Example: `joshuamichaelhall.com.s3-website-us-east-1.amazonaws.com`
4. **Protocol:** HTTP only (S3 static website endpoints don't support HTTPS)
5. **Name:** `joshuamichaelhall-s3-origin`

**Default cache behavior:**
6. **Viewer protocol policy:** Redirect HTTP to HTTPS
7. **Allowed HTTP methods:** GET, HEAD
8. **Cache policy:** CachingOptimized
9. Leave other defaults

**Settings:**
10. **Alternate domain names (CNAMEs):**
    - Add `joshuamichaelhall.com`
    - Add `www.joshuamichaelhall.com`
11. **Custom SSL certificate:** Select the certificate you created in ACM
12. **Default root object:** `index.html`
13. **Standard logging:** Off (or enable if you want logs)

14. Click **Create distribution**

**Wait for deployment** (15-30 minutes) - Status will change from "Deploying" to "Enabled"

**Checkpoint:** CloudFront distribution status = "Enabled"

### Step 3.4: Test CloudFront Distribution

1. Copy the **Distribution domain name** (e.g., `d123456abcdef.cloudfront.net`)
2. Open it in browser
3. Site should load with HTTPS

**Checkpoint:** Site loads at CloudFront URL with HTTPS

---

## Phase 4: Route 53 DNS Configuration (30 minutes + propagation time)

### Step 4.1: Check Current DNS Setup

Your domain `joshuamichaelhall.com` is currently pointing to GitHub Pages. We need to:
1. Move DNS to Route 53 (if not already there)
2. Update DNS records to point to CloudFront

### Step 4.2: Create Route 53 Hosted Zone (if needed)

**If domain is already in Route 53, skip to Step 4.3**

1. **AWS Console** → **Route 53**
2. Click **Hosted zones**
3. Click **Create hosted zone**
4. Domain name: `joshuamichaelhall.com`
5. Type: Public hosted zone
6. Click **Create hosted zone**
7. **Note the 4 nameservers** (you'll need these)

### Step 4.3: Update Domain Nameservers (if needed)

**If your domain registrar is NOT AWS Route 53:**

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS/Nameserver settings
3. Change nameservers to the 4 Route 53 nameservers from Step 4.2
4. Save changes
5. **Wait 1-24 hours for propagation** (usually faster)

**If your domain is already registered in Route 53, skip this step**

### Step 4.4: Create DNS Records

1. Go to Route 53 → Hosted zones → `joshuamichaelhall.com`
2. Click **Create record**

**Record 1: Root domain (joshuamichaelhall.com)**
- Record name: (leave blank)
- Record type: A
- Alias: Yes (toggle on)
- Route traffic to: Alias to CloudFront distribution
- Choose your CloudFront distribution from dropdown
- Click **Create records**

**Record 2: www subdomain (www.joshuamichaelhall.com)**
- Click **Create record** again
- Record name: `www`
- Record type: A
- Alias: Yes (toggle on)
- Route traffic to: Alias to CloudFront distribution
- Choose your CloudFront distribution from dropdown
- Click **Create records**

### Step 4.5: Remove GitHub Pages DNS (Optional - do this last)

Once everything works on AWS:
1. Go to your GitHub repo settings
2. Remove custom domain from GitHub Pages
3. (Optional) Delete CNAME file from repo

**Checkpoint:** Wait 5-60 minutes for DNS propagation

---

## Phase 5: Verification & Testing (30 minutes)

### Step 5.1: Test All URLs

Open these URLs in browser (private/incognito mode to avoid cache):

- [ ] `http://joshuamichaelhall.com` → Should redirect to HTTPS
- [ ] `https://joshuamichaelhall.com` → Should load site
- [ ] `http://www.joshuamichaelhall.com` → Should redirect to HTTPS
- [ ] `https://www.joshuamichaelhall.com` → Should load site

### Step 5.2: Test SSL Certificate

1. Click padlock icon in browser
2. View certificate
3. Issued by: Amazon
4. Valid for: joshuamichaelhall.com, www.joshuamichaelhall.com

### Step 5.3: Test All Pages

Navigate through your site:
- [ ] Homepage
- [ ] Portfolio page
- [ ] Blog posts
- [ ] About page
- [ ] Contact page
- [ ] 404 page (type invalid URL)

### Step 5.4: Test QR Code

1. Open QR code scanner on phone
2. Scan the QR code from your business card
3. Should open `https://joshuamichaelhall.com`
4. Site should load on mobile

### Step 5.5: Performance Check

1. Run Google PageSpeed Insights: https://pagespeed.web.dev/
2. Enter `https://joshuamichaelhall.com`
3. Should see good performance scores (CloudFront is fast)

---

## Phase 6: Update GitHub Workflow (Optional - 30 minutes)

### Option A: Keep GitHub Pages, Manual AWS Sync

When you update site:
```bash
# 1. Build locally
bundle exec jekyll build

# 2. Sync to S3
aws s3 sync _site/ s3://joshuamichaelhall.com --delete

# 3. Invalidate CloudFront cache (so changes appear immediately)
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Option B: Automated Deployment via GitHub Actions (Better - do this later)

Create `.github/workflows/deploy-to-aws.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1
          bundler-cache: true

      - name: Build Jekyll site
        run: bundle exec jekyll build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Sync to S3
        run: aws s3 sync _site/ s3://joshuamichaelhall.com --delete

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
```

**Setup GitHub Secrets:**
1. GitHub repo → Settings → Secrets and variables → Actions
2. Add secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `CLOUDFRONT_DISTRIBUTION_ID`

**This is a Cloud Resume Challenge component - add this after Re:Invent**

---

## Cost Breakdown

**Monthly AWS costs (estimated):**
- S3 storage: $0.02-0.10 (for ~100MB of files)
- CloudFront: $0.10-1.00 (first 1TB transfer is cheap)
- Route 53 hosted zone: $0.50/month
- **Total: ~$1-5/month**

**First year includes:**
- CloudFront: 1 TB data transfer out free (12 months)
- Route 53: First hosted zone free (12 months)

---

## Troubleshooting

### Problem: Certificate validation stuck

**Solution:**
- Check Route 53 CNAME records were created correctly
- Wait up to 30 minutes
- If using external DNS provider, manually add CNAME records

### Problem: Site loads but no HTTPS

**Solution:**
- Verify CloudFront distribution has correct certificate attached
- Check certificate is in us-east-1 region
- Wait for CloudFront deployment to complete

### Problem: 403 Forbidden error

**Solution:**
- Check S3 bucket policy allows public read
- Verify files were uploaded to bucket
- Check CloudFront origin points to S3 **website endpoint**, not bucket directly

### Problem: DNS not resolving

**Solution:**
- Wait for DNS propagation (up to 24 hours)
- Check nameservers are correctly set
- Use `dig joshuamichaelhall.com` to check DNS records
- Clear browser cache / use incognito mode

### Problem: Old GitHub Pages site still showing

**Solution:**
- Clear browser cache
- Wait for DNS propagation
- Remove custom domain from GitHub Pages settings
- Delete CNAME file from repo

---

## After Migration Success

### Update your resume/LinkedIn:
- "Built and deployed portfolio website using Jekyll, AWS S3, CloudFront, Route 53, and ACM"
- "Implemented secure HTTPS delivery using AWS Certificate Manager"
- "Configured CloudFront CDN for global content delivery"

### Update your Re:Invent pitch:
> "I deployed my portfolio site on AWS infrastructure - S3 for static hosting, CloudFront for CDN, Route 53 for DNS, and ACM for SSL certificates. After Re:Invent, I'm planning to enhance it with serverless backend - Lambda, DynamoDB, and API Gateway."

### Post-Re:Invent enhancements (Dec 7-21):
- [ ] Add visitor counter (DynamoDB + Lambda + API Gateway)
- [ ] Set up CI/CD with GitHub Actions (automated deployment)
- [ ] Add monitoring with CloudWatch
- [ ] Write blog post documenting architecture
- [ ] Add infrastructure-as-code (Terraform or CloudFormation)

---

## Success Criteria - You're Done When:

- [x] Site loads at https://joshuamichaelhall.com
- [x] SSL certificate shows valid (padlock icon)
- [x] All pages work (portfolio, blog, about, contact)
- [x] QR code on business cards opens your site
- [x] Site loads on mobile
- [x] No GitHub Pages references (fully migrated to AWS)
- [x] You can explain the architecture to someone at Re:Invent

---

## Architecture Diagram (for your understanding)

```
User Browser
    ↓
Route 53 DNS (joshuamichaelhall.com)
    ↓
CloudFront CDN (HTTPS, global edge locations)
    ↓
S3 Bucket (static website hosting)
    ↓
Your Jekyll site files (HTML, CSS, JS)

ACM Certificate (SSL/TLS) ← CloudFront uses this
```

---

## Key AWS Services Used (Know this for Re:Invent)

1. **Amazon S3:** Object storage for static website files
2. **Amazon CloudFront:** CDN for fast global content delivery
3. **Amazon Route 53:** DNS service for domain management
4. **AWS Certificate Manager (ACM):** Free SSL/TLS certificates
5. **(Future) AWS Lambda:** Serverless compute for backend logic
6. **(Future) Amazon DynamoDB:** NoSQL database for visitor counter
7. **(Future) Amazon API Gateway:** RESTful API for frontend/backend communication

---

## Timeline for Nov 10

- **8:00 AM - 9:00 AM:** Phase 1 - Build Jekyll site
- **9:00 AM - 10:00 AM:** Phase 2 - S3 setup and upload
- **10:00 AM - 11:30 AM:** Phase 3 - ACM certificate + CloudFront (includes wait time)
- **11:30 AM - 12:00 PM:** Lunch break (while CloudFront deploys)
- **12:00 PM - 1:00 PM:** Phase 4 - Route 53 DNS configuration
- **1:00 PM - 2:00 PM:** Phase 5 - Testing and verification
- **2:00 PM - 3:00 PM:** Buffer time for troubleshooting
- **3:00 PM - 4:00 PM:** Document what you did, prepare Re:Invent talking points

**Total: 6-8 hours including wait times**

---

## Your Business Cards Are Now Valid

✅ **AWS Solutions Architect Associate** - Passing Nov 9
✅ **Security+** - Passing Nov 29
✅ **Cloud Resume Demo** - Live at joshuamichaelhall.com (AWS-hosted)

**All claims are legitimate and defensible.**

---

**Good luck with the migration! Focus on AWS SAA studying until Nov 9, then execute this on Nov 10.**
