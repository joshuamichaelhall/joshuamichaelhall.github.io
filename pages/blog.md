---
layout: page
title: Technical Blog
permalink: /blog/
---

# Technical Blog

I write about DevOps practices, infrastructure automation, containerization, and platform engineering for financial services.

<div class="featured-article with-divider">
  <h2>Terminal-Based Development with Neovim, tmux, and CLI Tools</h2>
  <p class="post-date">March 23, 2025</p>
  <p>A detailed look at my terminal-based development environment and how it enhances productivity for DevOps engineering tasks, including infrastructure management, containerization, and cloud operations.</p>
  <a href="/blog/2025/03/23/terminal-based-development-environment/" class="btn outlined-btn">Read Article</a>
</div>

<div class="content-section with-divider">
  <h2>Local Articles</h2>
  <div class="blog-list">
    {% for post in site.posts %}
      {% include blog-post-preview.html post=post %}
    {% endfor %}
  </div>
</div>

<div class="content-section with-divider">
  <h2>Upcoming Articles</h2>
  <div class="upcoming-articles">
    <div class="upcoming-article with-divider">
      <h3>Infrastructure as Code Best Practices for Financial Services</h3>
      <p>A comprehensive guide to implementing secure, compliant infrastructure using Terraform and AWS services for financial applications.</p>
      <p class="coming-soon">Coming Soon</p>
    </div>
    
    <div class="upcoming-article with-divider">
      <h3>Kubernetes Security for Regulated Environments</h3>
      <p>Deep dive into implementing secure Kubernetes deployments that meet financial services compliance requirements.</p>
      <p class="coming-soon">Coming Soon</p>
    </div>
    
    <div class="upcoming-article">
      <h3>CI/CD Pipeline Security: Protecting the Deployment Process</h3>
      <p>Strategies for securing the entire CI/CD pipeline from development to production deployment.</p>
      <p class="coming-soon">Coming Soon</p>
    </div>
  </div>
</div>

<div class="content-section">
  <h2>Dev.to Articles</h2>
  <div id="devto-articles" class="blog-list">
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
          const isLast = index === data.length - 1;
          const articleDiv = document.createElement('div');
          articleDiv.className = 'blog-post-preview' + (isLast ? '' : ' with-divider');
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