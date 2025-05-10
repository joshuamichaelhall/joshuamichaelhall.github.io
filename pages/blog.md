---
layout: page
title: Technical Blog
permalink: /blog/
---

# Technical Blog

<div class="content-section with-divider">
  <h2>Featured Articles</h2>
  <p class="section-intro-text">In-depth technical tutorials and insights for infrastructure automation, containerization, and DevOps practices in modern applications.</p>

  <div class="articles-container">
    <div class="project-card">
      <h3><a href="/blog/2025/03/23/terminal-based-development-environment/">Terminal-Based Development with Neovim, tmux, and CLI Tools</a></h3>
      <p class="post-date">March 23, 2025</p>
      <p>A detailed look at my terminal-based development environment and how it enhances productivity for DevOps engineering tasks, including infrastructure management, containerization, and cloud operations.</p>
      <a href="/blog/2025/03/23/terminal-based-development-environment/" class="read-more">Read more</a>
    </div>
  </div>
</div>

<div class="content-section with-divider">
  <h2>Published Articles</h2>
  <p class="section-intro-text">Technical articles covering infrastructure automation, containerization, and cloud engineering best practices for modern application deployment.</p>

  <div class="articles-container">
    {% for post in site.posts %}
      {% include blog-post-preview.html post=post %}
    {% endfor %}
  </div>
</div>

<div class="content-section">
  <h2>Upcoming Technical Content</h2>
  <p class="section-intro-text">Stay tuned for these upcoming articles on infrastructure, containerization, and security topics for financial services environments.</p>

  <div class="articles-container">
    <div class="project-card">
      <h3><a href="#">Infrastructure as Code Best Practices for Financial Services</a></h3>
      <p class="post-date coming-soon-date">Coming Soon</p>
      <p>A comprehensive guide to implementing secure, compliant infrastructure using Terraform and AWS services for financial applications.</p>
    </div>

    <div class="project-card">
      <h3><a href="#">Kubernetes Security for Regulated Environments</a></h3>
      <p class="post-date coming-soon-date">Coming Soon</p>
      <p>Deep dive into implementing secure Kubernetes deployments that meet financial services compliance requirements.</p>
    </div>

    <div class="project-card">
      <h3><a href="#">CI/CD Pipeline Security: Protecting the Deployment Process</a></h3>
      <p class="post-date coming-soon-date">Coming Soon</p>
      <p>Strategies for securing the entire CI/CD pipeline from development to production deployment.</p>
    </div>
  </div>
</div>

<!-- Removed Dev.to Articles section as requested -->