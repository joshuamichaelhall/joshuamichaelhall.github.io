---
layout: page
title: Technical Blog
permalink: /blog/
---

I write about DevOps practices, infrastructure automation, containerization, and platform engineering for financial services.

## Featured Articles

<div class="featured-article">
  <h2>Terminal-Based Development with Neovim, tmux, and CLI Tools</h2>
  <p class="post-date">March 23, 2025</p>
  <p>A detailed look at my terminal-based development environment and how it enhances productivity for DevOps engineering tasks, including infrastructure management, containerization, and cloud operations.</p>
  <a href="/blog/2025/03/23/terminal-based-development-environment/" class="btn outlined-btn">Read Article</a>
</div>

## Local Articles

<div class="blog-list">
  {% for post in site.posts %}
  <div class="blog-post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
    {% if post.categories %}
    <p class="post-categories">
      Categories: 
      {% for category in post.categories %}
      <span class="category">{{ category }}</span>
      {% endfor %}
    </p>
    {% endif %}
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}" class="read-more">Read more</a>
  </div>
  {% endfor %}
</div>

## Upcoming Articles

<div class="upcoming-articles">
  <div class="upcoming-article">
    <h3>Infrastructure as Code Best Practices for Financial Services</h3>
    <p>A comprehensive guide to implementing secure, compliant infrastructure using Terraform and AWS services for financial applications.</p>
    <p class="coming-soon">Coming Soon</p>
  </div>
  
  <div class="upcoming-article">
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

## Dev.to Articles

<div id="devto-articles" class="blog-list">
  <p>Loading Dev.to articles...</p>
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
        data.forEach(article => {
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

<style>
  .featured-article {
    background-color: #f6f8fa;
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 40px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .featured-article h2 {
    margin-top: 0;
    color: #0366d6;
  }
  
  .featured-article .post-date {
    color: #586069;
    margin-bottom: 15px;
  }
  
  .upcoming-articles {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .upcoming-article {
    background-color: #f6f8fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .upcoming-article h3 {
    margin-top: 0;
    color: #24292e;
  }
  
  .coming-soon {
    display: inline-block;
    background-color: #0366d6;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-top: 10px;
  }
</style>