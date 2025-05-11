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
  <p class="section-intro-text">Upcoming articles aligning with my progressive skill development in financial services infrastructure, compliance automation, and platform engineering.</p>

  <div class="articles-container">
    <div class="project-card">
      <h3><a href="#">Infrastructure as Code for Financial Compliance</a></h3>
      <p class="post-date coming-soon-date">2025 (Foundation Skills)</p>
      <p>Implementing infrastructure-as-code patterns in Terraform with built-in controls for financial services compliance requirements.</p>
    </div>

    <div class="project-card">
      <h3><a href="#">Security Automation for Regulated Kubernetes Environments</a></h3>
      <p class="post-date coming-soon-date">2026 (Mid-Level Focus)</p>
      <p>Implementing security controls and compliance automation for Kubernetes in financial services with policy-as-code approaches.</p>
    </div>

    <div class="project-card">
      <h3><a href="#">Building Platform Engineering Teams for Financial Services</a></h3>
      <p class="post-date coming-soon-date">2026-2027 (Senior Preparation)</p>
      <p>Strategies for developing platform engineering capabilities that combine technical excellence with financial regulatory expertise.</p>
    </div>
  </div>
</div>

<!-- Removed Dev.to Articles section as requested -->