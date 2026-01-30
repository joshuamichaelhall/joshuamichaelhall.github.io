---
layout: post
title: "How I Used AI to Learn Cloud Architecture: Building My Federal Cloud Resume"
date: 2026-01-29
categories: aws cloud-security learning
tags: aws serverless cloud-architecture ai-assisted-learning nist-800-53
description: "An honest account of using AI as a learning tool to build a production AWS architecture, from zero cloud knowledge to a live serverless site."
---

Six months ago, I knew nothing about AWS. I had built websites, configured cloud sync solutions, and played with virtualization on local machines. But actual cloud architecture - compute services, serverless functions, IAM policies, CDN configurations - was foreign territory.

Today I have a production serverless architecture running at joshuahall.tech, I passed the AWS Solutions Architect Associate exam, and I understand cloud security concepts I could not have defined before starting.

Here is how I got there, and why I think the process matters more than the result.

---

## The Learning Method: AI as Dialogue Partner

I did not follow a tutorial. I did not copy someone else's Cloud Resume Challenge solution. I did not read all the code line by line.

Instead, I used AI as a dialogue partner. I asked questions. I requested options. I made decisions based on tradeoffs. Then I directed iterative implementation while reviewing results at each step.

A typical exchange looked like this:

**Me:** "Explain the benefits of using Lambda versus traditional EC2 for a visitor counter."

**AI:** Detailed comparison of cold start times, cost models, scaling behavior, operational overhead.

**Me:** "I want serverless. Use Lambda. What are the tradeoffs?"

**AI:** Discussion of cold starts, execution limits, debugging complexity.

**Me:** "Acceptable for this use case. Proceed."

This pattern repeated across every architectural decision. I was not writing code. I was directing architecture and learning concepts through structured conversation.

---

## What I Actually Built

The architecture is straightforward:

```
User Browser (HTTPS)
    ↓
CloudFront (CDN + SSL/TLS)
    ├→ S3 (Static hosting)
    └→ API Gateway (REST API)
            └→ Lambda (Python 3.12)
                └→ DynamoDB (visitor counter)
```

**Services used:**

- **S3** for static website hosting
- **CloudFront** for global CDN and SSL termination
- **ACM** for TLS certificate management
- **API Gateway** for the REST endpoint
- **Lambda** for visitor counter logic
- **DynamoDB** for storing visitor data
- **IAM** for access control
- **Route 53** for DNS
- **WAF** for application-layer protection
- **CloudWatch** for logging

**Security controls implemented:**

- Origin Access Control locks S3 to CloudFront only - no direct bucket access
- TLS 1.2+ enforced with HSTS headers
- Encryption at rest on all storage (S3, DynamoDB)
- IAM least privilege on all roles
- Privacy-preserving visitor counter that hashes IPs rather than storing them

The site runs at approximately $2.50 per month.

---

## The Decisions I Made

AI suggested options. I made choices. Here are the ones that mattered:

**Serverless over EC2.** I wanted to understand modern cloud patterns, not manage virtual machines. Lambda plus API Gateway meant zero server maintenance and pay-per-use pricing.

**Privacy-preserving counter.** I wanted to track unique visitors without my own visits inflating the count. But I did not want to store IP addresses. The solution hashes IPs using SHA-256, keeping only the first 16 characters. Enough for uniqueness, not enough to identify anyone.

**Origin Access Control.** The S3 bucket has no public access. All traffic flows through CloudFront. This is defense in depth - even if someone discovers the bucket name, they cannot access it directly.

**Single region deployment.** Everything lives in us-east-1. For a portfolio project, multi-region complexity was not justified. I know this would be different for production workloads.

These decisions came from understanding tradeoffs, not from following instructions.

---

## What I Learned

**Cloud services are building blocks.** Before this project, I thought of "the cloud" as someone else's computer. Now I understand it as composable services - compute, storage, networking, security - that you assemble into architectures. Lambda is not magic. It is a container that runs your code in response to events. Understanding that demystified everything else.

**Serverless changes the cost model.** Traditional hosting means paying for capacity whether you use it or not. Serverless means paying for actual execution. For low-traffic sites, the difference is dramatic. My $2.50/month would be $20-50/month on EC2.

**Security is configuration.** Most cloud security is not writing security code. It is configuring services correctly. IAM policies, bucket policies, security groups, encryption settings. The services provide the capabilities. You decide how to use them.

**Infrastructure as Code matters.** Clicking through the console teaches concepts. Terraform codifies them. I started with console work to learn, then documented configurations. For production work, IaC would come first.

---

## What I Did Not Do

Honesty matters here.

**I did not write most of the code myself.** The Lambda function, the Terraform configurations, the HTML/CSS - AI generated these based on my direction. I reviewed outputs and requested changes, but I was not debugging Python line by line.

**I did not memorize NIST control numbers.** The project documentation maps 36 NIST 800-53 controls to implemented features. AI generated that mapping. I understand why access control matters and what audit logging accomplishes. I could not recite "AC-2(1)" from memory.

**I did not go as deep as I could have.** The site works. The security controls are real. But I contented myself with "running and live" rather than "fully optimized." Given unlimited time, I would explore more services, implement CI/CD pipelines, add monitoring dashboards.

This was a learning project, not a production system for a paying client.

---

## Why This Matters for My Career

I am a CMMC Registered Practitioner transitioning from MSP operations to compliance assessment work. My background is hands-on security - firewalls, endpoints, incident response. Cloud architecture was a gap.

This project closed that gap. Not completely, but enough to have informed conversations about AWS security, serverless architecture, and cloud compliance. Enough to pass the AWS Solutions Architect Associate exam. Enough to understand what I am looking at when a client shows me their cloud environment.

More importantly, the process demonstrated something about how I learn. Give me a complex domain, a good AI dialogue partner, and a concrete goal, and I can get to functional competence quickly. That learning velocity matters in a field where technologies change constantly.

---

## The AI-Assisted Work Question

A hiring manager might ask: "Did you build this, or did AI build it?"

My honest answer: I directed AI to build this while I focused on understanding the architecture and making decisions. The code is AI-generated. The architectural choices are mine. The learning is real.

This is how technical work increasingly happens in 2026. AI handles implementation details. Humans handle judgment, decisions, and accountability. Pretending otherwise would be dishonest. Treating it as disqualifying would be naive.

I can explain why Origin Access Control matters, why we hash IPs instead of storing them, why Lambda made sense for this use case, and what I would do differently for a production system handling sensitive data. I cannot explain every line of Python in the Lambda function without reviewing it first.

For the work I am pursuing - compliance assessment, security architecture review, control validation - understanding architecture matters more than writing code. This project demonstrates that understanding.

---

## Try It Yourself

The site is live at [joshuahall.tech](https://joshuahall.tech).

The code is public at [github.com/joshuamichaelhall/federal-cloud-resume](https://github.com/joshuamichaelhall/federal-cloud-resume).

If you are learning cloud architecture, consider the dialogue-driven approach. Do not just follow tutorials. Ask questions. Demand options. Make decisions. Understand tradeoffs. The learning sticks better when you are directing rather than copying.

---

*Joshua Hall is a CMMC Registered Practitioner with CCP exam passed (certification pending Tier 3 background). He spent 3 years building security programs for SMBs with zero ransomware incidents across 100+ managed endpoints. He is currently seeking CMMC Consultant roles at C3PAOs.*

*Connect on [LinkedIn](https://linkedin.com/in/joshuamichaelhall).*
