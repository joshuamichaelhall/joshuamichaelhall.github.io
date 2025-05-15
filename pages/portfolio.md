---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Skill Development Projects</h2>
  <p class="section-intro-text">My portfolio demonstrates progressive skill development in DevOps and platform engineering. These projects showcase both technical implementation and documentation capabilities with a focus on financial services requirements.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Foundation Projects</h3>
      
      <div class="project-card featured">
        <h2>
          <img src="/assets/images/dashboard-icon.png" alt="Dashboard Icon" class="project-icon" />
          DevOps Career Dashboard
        </h2>
        <div class="project-status">Foundation Phase | Completed</div>
        <div class="project-details">
          <div class="project-image">
            <img src="/assets/images/dashboard/dashboard-main.png" alt="DevOps Career Dashboard" />
          </div>
          <div class="project-description">
            <p>Comprehensive career tracking platform with interactive metrics visualization, skills tracking, and learning management. Includes authentication, API integration, and encrypted data storage with focus on security.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>JWT-based authentication with role-based access control</li>
              <li>AES-256-GCM encryption for sensitive data</li>
              <li>RESTful API for dashboard data management</li>
              <li>Clay CRM integration for professional networking</li>
              <li>Interactive metrics visualization with Chart.js</li>
              <li>Automated backup system for career data</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> React, Node.js, Express, TailwindCSS, JWT, Encryption, Chart.js
            </p>
            <div class="project-links">
              <a href="https://github.com/joshuamichaelhall/devops-career-dashboard" class="github-link" target="_blank">View on GitHub</a>
              <a href="/dashboard" class="demo-link">View Details</a>
              <a href="https://devops-dashboard.joshuamichaelhall.com" class="live-link" target="_blank">Launch Dashboard</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <h2>Secure Financial Infrastructure as Code with AWS & Terraform</h2>
        <div class="project-status">Foundation Phase | Planning</div>
        <div class="project-details">
          <div class="project-image">
            <img src="/assets/images/terraform-aws.png" alt="Terraform AWS Infrastructure" />
          </div>
          <div class="project-description">
            <p>A comprehensive AWS infrastructure project designed specifically for financial services applications, with a strong focus on security, compliance, and automation. This project implements Infrastructure as Code (IaC) using Terraform to create a secure, scalable, and compliant cloud environment that meets financial industry regulations.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Multi-account AWS architecture with security isolation</li>
              <li>Defense-in-depth networking design with public, private, and restricted subnets</li>
              <li>Automated compliance checks and security scanning</li>
              <li>Comprehensive audit logging and monitoring</li>
              <li>Disaster recovery with cross-region replication</li>
              <li>Infrastructure as Code using Terraform with modular design</li>
              <li>CI/CD pipeline for infrastructure validation and deployment</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> AWS (VPC, EC2, RDS, S3, Lambda, CloudTrail, Security Hub), Terraform, AWS Config, CloudWatch, GitHub Actions
            </p>
            <div class="project-links">
              <a href="https://github.com/JoshuaMichaelHall-Tech/project-aws-infrastructure" class="github-link" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <h2>Automated DevOps Pipeline for Financial Applications</h2>
        <div class="project-status">Foundation Phase | Planning</div>
        <div class="project-details">
          <div class="project-image">
            <img src="/assets/images/cicd-pipeline.png" alt="DevOps Pipeline" />
          </div>
          <div class="project-description">
            <p>A robust CI/CD pipeline designed specifically for financial services applications, providing comprehensive security scanning, compliance validation, and automated deployment. This project implements a complete delivery pipeline that transitions code from development to production while enforcing security and compliance requirements at every stage.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Multi-environment deployment pipeline (dev, test, staging, production)</li>
              <li>Infrastructure validation with Terraform</li>
              <li>Automated security scanning for code and dependencies</li>
              <li>Compliance checks for financial regulations</li>
              <li>Approval workflows for sensitive environments</li>
              <li>Automated testing at all stages</li>
              <li>Deployment metrics and reporting</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> GitHub Actions, AWS CodePipeline, SonarQube, OWASP dependency scanning, Terraform, AWS CloudFormation Guard, JUnit, pytest
            </p>
            <div class="project-links">
              <a href="https://github.com/JoshuaMichaelHall-Tech/project-devops-pipeline-financial" class="github-link" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="timeline-section">
      <h3>Advanced Implementation Projects</h3>
      
      <div class="project-card">
        <h2>Secure Container Platform for Financial Services</h2>
        <div class="project-status">Advanced Phase | Planning</div>
        <div class="project-details">
          <div class="project-image">
            <img src="/assets/images/kubernetes.png" alt="Container Security Platform" />
          </div>
          <div class="project-description">
            <p>A comprehensive container security platform tailored for financial services applications, providing secure image management, runtime protection, and compliance monitoring. This project implements a secure container ecosystem that enables financial institutions to adopt containerization while maintaining strict security and regulatory compliance.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li>Secure container registry with vulnerability scanning</li>
              <li>Image signing and verification workflow</li>
              <li>Runtime security monitoring and enforcement</li>
              <li>Network policy implementation for container isolation</li>
              <li>Secrets management integration</li>
              <li>Compliance reporting and audit trails</li>
              <li>Auto-remediation for common security issues</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Docker, AWS Elastic Container Service (ECS), AWS Elastic Container Registry (ECR), Trivy, Open Policy Agent (OPA), AWS Secrets Manager, Prometheus, Grafana
            </p>
            <div class="project-links">
              <a href="https://github.com/JoshuaMichaelHall-Tech/project-container-security-finance" class="github-link" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<div class="content-section with-divider">
  <h2>Technical Focus Categories</h2>
  <p class="section-intro-text">Explore my projects by technical focus area, showcasing specialized skills in infrastructure automation, containerization, monitoring, and developer tools.</p>

  <div class="project-filter">
    <button class="filter-btn active" data-category="all">All Projects</button>
    <button class="filter-btn" data-category="infrastructure">Infrastructure</button>
    <button class="filter-btn" data-category="containers">Containerization</button>
    <button class="filter-btn" data-category="monitoring">Monitoring</button>
    <button class="filter-btn" data-category="developer-tools">Developer Tools</button>
    <button class="filter-btn" data-category="education">Education</button>
  </div>
  
  <div class="projects-grid">
    {% assign projects = site.data.projects %}
    {% for project in projects %}
    <div class="project-card" data-category="{{ project.category }}">
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

<div class="content-section">
  <h2>Value Creation Focus</h2>
  
  <p class="section-intro-text">My portfolio projects are designed to create specific value for financial services organizations across several key dimensions:</p>
  
  <div class="value-areas-grid">
    <div class="value-area-item">
      <h3>Compliance Risk Reduction</h3>
      <p>Implementing security and compliance as code to ensure consistent application of regulatory controls and reduce the risk of compliance violations.</p>
    </div>
    
    <div class="value-area-item">
      <h3>Deployment Velocity</h3>
      <p>Automating infrastructure provisioning and deployment pipelines to increase the speed of delivery while maintaining security and reliability standards.</p>
    </div>
    
    <div class="value-area-item">
      <h3>System Reliability</h3>
      <p>Building robust, self-healing infrastructure with proper monitoring and alerting to ensure critical financial systems maintain high availability.</p>
    </div>
    
    <div class="value-area-item">
      <h3>Security Posture</h3>
      <p>Creating security automation and validation systems that continuously verify and enforce security controls for all infrastructure components.</p>
    </div>
    
    <div class="value-area-item">
      <h3>Operational Efficiency</h3>
      <p>Implementing cost optimization and resource management solutions that improve resource utilization while maintaining performance requirements.</p>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    
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