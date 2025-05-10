---
layout: page
title: Technical Blog
permalink: /blog/
---

# Technical Blog

<div class="content-section with-divider">
  <h2>Featured Articles</h2>
  <div class="blog-post-preview">
    <h2><a href="/blog/2025/03/23/terminal-based-development-environment/">Terminal-Based Development with Neovim, tmux, and CLI Tools</a></h2>
    <p class="post-date">March 23, 2025</p>
    <p>A detailed look at my terminal-based development environment and how it enhances productivity for DevOps engineering tasks, including infrastructure management, containerization, and cloud operations.</p>
    <a href="/blog/2025/03/23/terminal-based-development-environment/" class="btn outlined-btn">Read Article</a>
  </div>
</div>

<div class="content-section with-divider">
  <h2>Published Articles</h2>
  {% for post in site.posts %}
    {% include blog-post-preview.html post=post %}
  {% endfor %}
</div>

<div class="content-section">
  <h2>Upcoming Technical Content</h2>
  <div class="blog-post-preview">
    <h2><a href="#">Infrastructure as Code Best Practices for Financial Services</a></h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>A comprehensive guide to implementing secure, compliant infrastructure using Terraform and AWS services for financial applications.</p>
  </div>

  <div class="blog-post-preview">
    <h2><a href="#">Kubernetes Security for Regulated Environments</a></h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>Deep dive into implementing secure Kubernetes deployments that meet financial services compliance requirements.</p>
  </div>

  <div class="blog-post-preview">
    <h2><a href="#">CI/CD Pipeline Security: Protecting the Deployment Process</a></h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>Strategies for securing the entire CI/CD pipeline from development to production deployment.</p>
  </div>
</div>

<!-- Removed Dev.to Articles section as requested -->