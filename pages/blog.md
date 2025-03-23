---
layout: page
title: Technical Blog
permalink: /blog/
---

# Technical Blog

I write about software engineering, terminal-based development workflows, mathematics for programming, and the path to ML in finance.

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
