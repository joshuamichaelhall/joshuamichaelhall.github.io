---
layout: page
title: Portfolio
permalink: /portfolio/
---

# My Portfolio

This portfolio showcases my DevOps/SRE projects, focusing on infrastructure automation, containerization, and financial services compliance. Each project demonstrates my commitment to mastery-based learning and building secure, reliable infrastructure.

<div class="content-section with-divider">
  <h2>Featured Projects</h2>
  <p class="page-intro">
    This portfolio showcases enterprise-ready DevOps projects focused on infrastructure automation, security compliance, and containerization for financial services environments. Each implementation demonstrates industry best practices and production-grade architecture.
  </p>

  <div class="featured-projects">
    <div class="project-card featured with-divider">
      <h2>Infrastructure as Code for Multi-Environment Deployment</h2>
      <div class="project-details">
        <div class="project-image">
          <img src="/assets/images/terraform-aws.png" alt="Terraform AWS Infrastructure" />
        </div>
        <div class="project-description">
          <p>Production-grade infrastructure modules for dev/test/prod environments with state management, security controls, and compliance documentation for financial services.</p>
          <p class="technologies">
            <strong>Technologies:</strong> Terraform, AWS, GitHub Actions, IAM, VPC, S3, RDS
          </p>
          <div class="project-links">
            <a href="https://github.com/JoshuaMichaelHall/finapp-infrastructure" class="github-link" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="project-card featured">
      <h2>Containerized Microservices Platform</h2>
      <div class="project-details">
        <div class="project-image">
          <img src="/assets/images/kubernetes.png" alt="Kubernetes Platform" />
        </div>
        <div class="project-description">
          <p>Multi-service application containerization with Kubernetes deployment manifests, monitoring integration, and security implementation focusing on high availability for financial applications.</p>
          <p class="technologies">
            <strong>Technologies:</strong> Docker, Kubernetes, Prometheus, Grafana, RBAC
          </p>
          <div class="project-links">
            <a href="https://github.com/JoshuaMichaelHall/container-platform" class="github-link" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-section">
  <h2>All Projects</h2>
  
  <div class="project-filter">
    <button class="filter-btn active" data-category="all">All</button>
    <button class="filter-btn" data-category="infrastructure">Infrastructure</button>
    <button class="filter-btn" data-category="containers">Containers</button>
    <button class="filter-btn" data-category="security">Security</button>
    <button class="filter-btn" data-category="monitoring">Monitoring</button>
  </div>
  
  <div class="projects-grid">
    {% assign projects = site.data.projects %}
    {% for project in projects %}
    <div class="project-card {% if forloop.last == false %}with-divider{% endif %}" data-category="{{ project.category }}">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p class="technologies">
        <strong>Technologies:</strong> {{ project.technologies | join: ", " }}
      </p>
      <div class="project-links">
        <a href="{{ project.github }}" target="_blank">GitHub</a>
        {% if project.demo %}
        <a href="{{ project.demo }}" target="_blank">Demo</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
</script>