---
layout: page
title: Blog
permalink: /blog/
---

# Technical Blog

<div class="content-section with-divider">
  <h2>Published Articles</h2>
  <p class="section-intro-text">Technical articles covering AWS infrastructure, automation, and DevOps practices.</p>

  <div class="articles-container">
    {% for post in site.posts %}
      {% include blog-post-preview.html post=post %}
    {% endfor %}
  </div>
</div>

