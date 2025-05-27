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

<div class="content-section linkedin-cta">
  <h2>Stay Connected for Technical Insights</h2>
  <p class="section-intro-text">I regularly share technical articles, infrastructure best practices, and DevOps insights for financial services on LinkedIn. Join my network to stay updated on the latest trends in cloud architecture, security automation, and infrastructure as code.</p>
  
  <div class="cta-box">
    <h3>Follow on LinkedIn</h3>
    <p>Get notified when I publish new technical content, share industry insights, or announce upcoming projects. Let's build a community focused on advancing DevOps practices in financial services.</p>
    <a href="https://www.linkedin.com/in/joshuamichaelhall" class="btn primary-btn linkedin-btn cta-main-btn" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i> Follow Joshua on LinkedIn
    </a>
  </div>
</div>