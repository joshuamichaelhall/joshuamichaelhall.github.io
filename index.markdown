---
layout: home
title: Home
---

<div class="hero-section">
  <div class="hero-content">
    <h1>Joshua Michael Hall</h1>
    <h2>DevOps/SRE Engineer | Financial Services Focus</h2>
    <p>Building a high-paying career through mastery of DevOps/SRE fundamentals with specialized expertise in financial services infrastructure.</p>
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
      <h3>Infrastructure as Code</h3>
      <p>Building automated, reproducible infrastructure with Terraform and AWS CloudFormation for financial environments.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Containerization & Orchestration</h3>
      <p>Docker containerization and Kubernetes orchestration with focus on security and high availability.</p>
    </div>
    <div class="tech-focus-item">
      <h3>CI/CD Automation</h3>
      <p>Continuous integration and delivery pipelines with GitHub Actions, Jenkins, and automated testing.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Terminal-Centric Workflow</h3>
      <p>Optimized development environment using Neovim, tmux, and CLI tools for maximum productivity.</p>
    </div>
  </div>
</section>

<section class="home-section" id="featured-projects">
  <h2>Featured Projects</h2>
  <div class="featured-projects-grid">
    <div class="project-card">
      <h3>Infrastructure as Code for Multi-Environment Deployment</h3>
      <p>Production-grade infrastructure modules for dev/test/prod environments with security controls for financial services compliance.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Terraform, AWS, GitHub Actions
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/finapp-infrastructure" target="_blank" class="btn project-btn">View on GitHub</a>
      </div>
    </div>
    <div class="project-card">
      <h3>Containerized Microservices Platform</h3>
      <p>Multi-service application containerization with Kubernetes deployment, monitoring, and security implementation.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Docker, Kubernetes, Prometheus, Grafana
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/container-platform" target="_blank" class="btn project-btn">View on GitHub</a>
      </div>
    </div>
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
        <h3>2025: Mid-Level DevOps Engineer</h3>
        <p>Initial DevOps/SRE role with focus on infrastructure automation and container orchestration.</p>
        <p class="target">Target: $90K-$150K</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2026-2027: Senior DevOps Engineer</h3>
        <p>Advanced DevOps role with expanded responsibilities in platform engineering.</p>
        <p class="target">Target: $120K-$170K</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2028+: Senior Platform Engineer</h3>
        <p>Platform engineering leadership focused on financial services compliance and infrastructure.</p>
        <p class="target">Target: $140K-$200K+</p>
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