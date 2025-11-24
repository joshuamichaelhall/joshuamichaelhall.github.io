# Maintenance Mode Instructions

This document explains how to use maintenance mode for the website while making updates.

## Current Status
- ✅ **Maintenance mode is ACTIVE**
- The site currently shows the "Under Construction" page
- Original homepage is backed up as `index.markdown.backup`

## Files Involved
- `index.html` - The maintenance/under construction page (currently active)
- `index.markdown.backup` - Your original homepage (backed up)
- `maintenance.html` - Backup of maintenance page (when site is restored)

## Enable Maintenance Mode
Use this when you want to show "Under Construction" while editing:

```bash
# Backup current homepage and activate maintenance page
mv index.markdown index.markdown.backup
mv maintenance.html index.html

# Commit and push changes
git add .
git commit -m "Enable maintenance mode"
git push
```

## Restore Normal Site
Use this when you're ready to go live with your updates:

```bash
# Restore original homepage and backup maintenance page
mv index.html maintenance.html
mv index.markdown.backup index.markdown

# Commit and push changes
git add .
git commit -m "Restore normal site"
git push
```

## Safe Editing Workflow

### 1. Enable Maintenance Mode First
```bash
# Put site in maintenance mode
mv index.markdown index.markdown.backup
mv maintenance.html index.html
git add . && git commit -m "Enable maintenance mode" && git push
```

### 2. Make Your Updates
- Edit files as needed
- Test locally if possible
- Make multiple commits for your changes

### 3. Restore When Ready
```bash
# Restore the full site
mv index.html maintenance.html
mv index.markdown.backup index.markdown
git add . && git commit -m "Restore normal site" && git push
```

## Benefits of This Approach
- ✅ Visitors see a professional "Under Construction" page instead of broken content
- ✅ Google Analytics continues tracking visitors during maintenance
- ✅ Contact links (LinkedIn, GitHub, email) remain accessible
- ✅ You can work on updates without affecting live site
- ✅ Easy one-command restore when ready

## Quick Commands Reference

| Action | Command |
|--------|---------|
| **Enable Maintenance** | `mv index.markdown index.markdown.backup && mv maintenance.html index.html` |
| **Restore Site** | `mv index.html maintenance.html && mv index.markdown.backup index.markdown` |
| **Check Status** | `ls -la index.*` |

## Troubleshooting

**If you lose track of which mode you're in:**
```bash
# Check what files exist
ls -la index.*

# If you see index.html (maintenance is active)
# If you see index.markdown (normal site is active)
```

**If you accidentally delete a backup:**
```bash
# Check git history
git log --oneline -10

# Restore from a previous commit if needed
git checkout <commit-hash> -- <filename>
```

## Notes
- GitHub Pages takes 1-3 minutes to deploy changes
- The maintenance page includes Google Analytics tracking
- All your site's other pages (about, portfolio, etc.) remain accessible via direct URLs during maintenance mode
- The maintenance page is responsive and looks professional on all devices