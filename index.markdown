---
layout: home
title: Home
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Joshua Michael Hall</h1>
    <h2>Software Engineer | Future ML Specialist</h2>
    <p>Building a high-paying career through mastery of software engineering fundamentals with a path toward ML/AI in finance.</p>
    <div class="hero-links">
      <a href="/portfolio" class="btn primary-btn">View Portfolio</a>
      <a href="/about" class="btn secondary-btn">About Me</a>
    </div>
  </div>
</div>

<section class="home-section" id="technical-focus">
  <h2>Technical Focus</h2>
  <div class="tech-focus-grid">
    <div class="tech-focus-item">
      <h3>Backend Development</h3>
      <p>Specialized in Ruby and Python with strong focus on clean, maintainable code and comprehensive testing.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Terminal-Based Workflow</h3>
      <p>Optimized development environment using Neovim, tmux, and CLI tools for maximum productivity.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Data Analysis</h3>
      <p>Processing and analyzing data with Python libraries including Pandas and NumPy.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Financial Applications</h3>
      <p>Building toward specialized knowledge in financial data processing and ML applications in finance.</p>
    </div>
  </div>
</section>

<section class="home-section" id="featured-projects">
  <h2>Featured Projects</h2>
  <div class="featured-projects-grid">
    {% assign featured_projects = site.data.projects | where: "featured", true | limit: 2 %}
    {% for project in featured_projects %}
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p class="technologies">
        <strong>Technologies:</strong> {{ project.technologies | join: ", " }}
      </p>
      <div class="project-links">
        {% if project.github %}
        <a href="{{ project.github }}" target="_blank" class="btn project-btn">View on GitHub</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</section>

<section class="home-section" id="latest-posts">
  <h2>Latest Articles</h2>
  <div class="latest-posts-grid">
    {% for post in site.posts limit:3 %}
    <div class="post-card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more</a>
    </div>
    {% endfor %}
  </div>
  <div class="section-link">
    <a href="/blog" class="btn outlined-btn">View All Articles</a>
  </div>
</section>

<section class="home-section" id="career-vision">
  <h2>Career Vision</h2>
  <div class="career-timeline">
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2026-2028: Software Engineer</h3>
        <p>Initial software engineering role with focus on backend development and data processing.</p>
        <p class="target">Target: $120-150K</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2028-2031: ML Engineer</h3>
        <p>Transition to machine learning engineering roles with focus on financial applications.</p>
        <p class="target">Target: $150-200K</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2031+: Senior ML Engineer</h3>
        <p>Lead ML engineer positions focused on trading strategies and financial systems.</p>
        <p class="target">Target: $350K+</p>
      </div>
    </div>
  </div>
</section>

<script>
  // Add animation to timeline items
  document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
</script>
