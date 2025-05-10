---
layout: page
title: Portfolio
permalink: /portfolio/
---

# My Portfolio

This portfolio showcases my DevOps/SRE projects, focusing on infrastructure automation, containerization, and financial services compliance. Each project demonstrates my commitment to mastery-based learning and building secure, reliable infrastructure.

<div class="content-section with-divider">
  <h2>Featured Projects</h2>
  
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
    
    <div class="project-card featured no-divider">
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

<div class="content-section no-divider">
  <h2>All Projects</h2>
  
  <div class="project-filter">
    <button class="filter-btn active" data-category="all">All</button>
    <button class="filter-btn" data-category="infrastructure">Infrastructure</button>
    <button class="filter-btn" data-category="containers">Containers</button>
    <button class="filter-btn" data-category="security">Security</button>
    <button class="filter-btn" data-category="monitoring">Monitoring</button>
  </div>
  
  <div class="projects-grid">
    <div class="project-card" data-category="infrastructure">
      <h3>Infrastructure as Code for Multi-Environment Deployment</h3>
      <p>Production-grade infrastructure modules for dev/test/prod environments with security controls for financial services compliance.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Terraform, AWS, GitHub Actions
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/finapp-infrastructure" target="_blank">GitHub</a>
      </div>
    </div>
    
    <div class="project-card" data-category="containers">
      <h3>Containerized Microservices Platform</h3>
      <p>Multi-service application containerization with Kubernetes deployment, monitoring, and security implementation.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Docker, Kubernetes, Prometheus, Grafana
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/container-platform" target="_blank">GitHub</a>
      </div>
    </div>
    
    <div class="project-card" data-category="security">
      <h3>Security Automation Suite</h3>
      <p>Infrastructure security scanning automation and compliance reporting tools for financial regulations.</p>
      <p class="technologies">
        <strong>Technologies:</strong> AWS Security Hub, Terraform, Python
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/security-automation" target="_blank">GitHub</a>
      </div>
    </div>
    
    <div class="project-card" data-category="monitoring">
      <h3>DevOps Monitoring Dashboard</h3>
      <p>Comprehensive monitoring and alerting solution for infrastructure and applications with financial services focus.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Prometheus, Grafana, Alertmanager, ELK Stack
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/monitoring-dashboard" target="_blank">GitHub</a>
      </div>
    </div>
    
    <div class="project-card" data-category="infrastructure">
      <h3>CI/CD Pipeline Implementation</h3>
      <p>Complete CI/CD pipeline for application deployment with testing, security scanning, and automated rollbacks.</p>
      <p class="technologies">
        <strong>Technologies:</strong> GitHub Actions, AWS, Docker, Terraform
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/cicd-pipeline" target="_blank">GitHub</a>
      </div>
    </div>
    
    <div class="project-card" data-category="containers">
      <h3>Kubernetes Operator for Financial Applications</h3>
      <p>Custom Kubernetes operator for managing financial application deployments with compliance controls.</p>
      <p class="technologies">
        <strong>Technologies:</strong> Kubernetes, Go, Operator SDK
      </p>
      <div class="project-links">
        <a href="https://github.com/JoshuaMichaelHall/fin-k8s-operator" target="_blank">GitHub</a>
      </div>
    </div>
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