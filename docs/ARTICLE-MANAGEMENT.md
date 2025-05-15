# Article Management Guide

This document outlines the structure, publication process, and best practices for managing articles on the joshuamichaelhall.github.io site.

## Article Structure

All blog posts should be stored in the `_posts` directory (directly under the repository root) following the Jekyll naming convention:

```
YYYY-MM-DD-title-with-hyphens.md
```

For example:
```
2025-05-20-strategic-approach-to-devops-skills.md
```

## Required Frontmatter

Every article must include the following frontmatter at the top of the file:

```yaml
---
layout: post
title: "Your Article Title Here"
date: YYYY-MM-DD
categories: category1 category2
tags: tag1 tag2 tag3
excerpt: "A brief summary of the article (1-2 sentences)"
---
```

- **layout**: Should be `post` for all blog articles
- **title**: The full title of your article
- **date**: Publication date in YYYY-MM-DD format
- **categories**: Space-separated list of categories (usually 1-3)
- **tags**: Space-separated list of tags relevant to the content
- **excerpt**: A brief summary that will appear in article listings

## Publication Control

To control whether an article is published:

- **For published articles**: Include the frontmatter as shown above
- **For draft/unpublished articles**: Add `published: false` to the frontmatter

```yaml
---
layout: post
title: "Draft Article"
date: YYYY-MM-DD
categories: category1 category2
published: false
---
```

## Current Article Status

As of the latest update, the site includes the following articles:

### Published Articles
- "Why I'm Transitioning to DevOps/SRE: My Career Journey" (2025-04-29)
- "Terminal-Based Development with Neovim, tmux, and CLI Tools" (2025-03-23)
- "Strategic Approach to DevOps Skills: Building a Career Dashboard with AI Assistance" (2025-05-15)
- "Infrastructure as Code Best Practices for Financial Services" (2025-05-05)

### Unpublished Articles
- "Setting Up a Secure AWS Learning Environment for DevOps Practice" (2025-01-15) - Intentionally marked as `published: false`

## Build Process

Articles are processed during the Jekyll build process. To verify that an article will be published correctly:

1. Run a local build: `bundle exec jekyll build`
2. Check the `_site/blog/` directory to confirm your article appears there
3. If the article doesn't appear, check the frontmatter and ensure `published: false` is not present

## Troubleshooting

If your articles are not appearing in the built site:

1. **Check article location**: Ensure the file is directly in the `_posts` directory, not in a subdirectory
2. **Verify frontmatter**: Make sure frontmatter is formatted correctly with proper YAML syntax
3. **Check file name**: Ensure the file follows the YYYY-MM-DD-title.md pattern
4. **Check publication status**: Remove `published: false` if you want the article to appear

## Best Practices

- Use descriptive file names that match the article content
- Include relevant categories and tags to improve discoverability
- Write meaningful excerpts that accurately summarize the content
- Add images to the `assets/images` directory and reference them in articles
- Preview locally before pushing changes to production

## Updating This Document

When adding new articles or changing the publication process, please update this document to keep it current.

Last updated: May 15, 2025 (after site rebuild)