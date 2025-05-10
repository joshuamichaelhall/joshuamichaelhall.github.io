---
layout: page
title: Technical Blog
permalink: /blog/
---

# Technical Blog

<div class="featured-article">
  <h2>Terminal-Based Development with Neovim, tmux, and CLI Tools</h2>
  <p class="post-date">March 23, 2025</p>
  <p>A detailed look at my terminal-based development environment and how it enhances productivity for DevOps engineering tasks, including infrastructure management, containerization, and cloud operations.</p>
  <a href="/blog/2025/03/23/terminal-based-development-environment/" class="btn outlined-btn">Read Article</a>
</div>

<div class="content-section with-divider">
  <h2>Local Articles</h2>
  {% for post in site.posts %}
    {% include blog-post-preview.html post=post %}
  {% endfor %}
</div>

<div class="content-section with-divider">
  <h2>Upcoming Articles</h2>
  <div class="blog-post-preview">
    <h2>Infrastructure as Code Best Practices for Financial Services</h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>A comprehensive guide to implementing secure, compliant infrastructure using Terraform and AWS services for financial applications.</p>
  </div>

  <div class="blog-post-preview">
    <h2>Kubernetes Security for Regulated Environments</h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>Deep dive into implementing secure Kubernetes deployments that meet financial services compliance requirements.</p>
  </div>

  <div class="blog-post-preview">
    <h2>CI/CD Pipeline Security: Protecting the Deployment Process</h2>
    <p class="post-date coming-soon-date">Coming Soon</p>
    <p>Strategies for securing the entire CI/CD pipeline from development to production deployment.</p>
  </div>
</div>

<div class="content-section">
  <h2>Dev.to Articles</h2>
  <div id="devto-articles">
    <p>Loading Dev.to articles...</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Fetch Dev.to articles
    fetch('https://dev.to/api/articles?username=joshuamichaelhall')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('devto-articles');
        container.innerHTML = ''; // Clear loading message
        
        if (data.length === 0) {
          container.innerHTML = '<p>No articles found on Dev.to</p>';
          return;
        }
        
        // Display articles
        data.forEach((article, index) => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'blog-post-preview';
          articleDiv.innerHTML = `
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p class="post-date">${new Date(article.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            ${article.tag_list.length > 0 ? `
              <p class="post-categories">
                Tags:
                ${article.tag_list.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
              </p>
            ` : ''}
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank" class="read-more">Read on Dev.to</a>
          `;
          container.appendChild(articleDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching Dev.to articles:', error);
        document.getElementById('devto-articles').innerHTML = '<p>Error loading Dev.to articles</p>';
      });
  });
</script>