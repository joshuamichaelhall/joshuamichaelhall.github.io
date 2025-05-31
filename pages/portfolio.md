---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Platform Engineering Projects</h2>
  <p class="section-intro-text">Comprehensive platform engineering solutions demonstrating technical excellence, business impact, and leadership capabilities in financial services infrastructure. These projects showcase expertise in building scalable, secure, and compliant infrastructure platforms.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Enterprise Platform Solutions</h3>
      
      <div class="project-card featured">
        <div class="project-header">
          <h2>Financial Services AWS Infrastructure</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Platform Engineering</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/terraform-aws.png" alt="Terraform AWS Infrastructure" />
            </div>
            <a href="https://github.com/JoshuaMichaelHall-Tech/project-aws-infrastructure" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div class="project-description">
            <p>Enterprise-grade AWS platform architecture designed for financial services with comprehensive security, compliance, and governance frameworks. Demonstrates platform engineering excellence and regulatory compliance automation.</p>
            <p><strong>Platform Capabilities:</strong></p>
            <ul>
              <li>Multi-account AWS organization with security boundaries</li>
              <li>Automated compliance controls and regulatory frameworks</li>
              <li>Self-service infrastructure provisioning for development teams</li>
              <li>Comprehensive monitoring, logging, and audit capabilities</li>
              <li>Cost optimization and resource governance automation</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> AWS (VPC, EC2, RDS, S3, IAM), Terraform, AWS Config, CloudTrail
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>Developer Productivity Platform</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Platform Engineering</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/enhanced_terminal_environment.png" alt="Enhanced Terminal Environment" />
            </div>
            <a href="https://github.com/JoshuaMichaelHall-Tech/enhanced-terminal-environment" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div class="project-description">
            <p>Comprehensive developer productivity platform that standardizes tooling and workflows across engineering teams. Reduces onboarding time and increases development velocity through automated environment provisioning.</p>
            <p><strong>Platform Features:</strong></p>
            <ul>
              <li>Standardized development environment with integrated cloud tooling</li>
              <li>Automated infrastructure access and credential management</li>
              <li>Workflow automation for common DevOps tasks</li>
              <li>Team collaboration tools and shared configurations</li>
              <li>Self-service capabilities for infrastructure interaction</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Neovim, Tmux, Zsh, AWS CLI, Terraform CLI
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

<div class="content-section">
  <h2>Platform Engineering Expertise</h2>
  
  <div class="value-areas-grid">
    <div class="value-area-item">
      <h3>Platform Architecture</h3>
      <ul>
        <li>Enterprise AWS multi-account strategies</li>
        <li>Self-service infrastructure platforms</li>
        <li>Developer productivity and tooling</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Financial Services Focus</h3>
      <ul>
        <li>Regulatory compliance automation</li>
        <li>Security frameworks and governance</li>
        <li>Risk management and audit preparation</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Infrastructure Automation</h3>
      <ul>
        <li>Terraform enterprise patterns</li>
        <li>CI/CD pipeline security integration</li>
        <li>Infrastructure testing and validation</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Operational Excellence</h3>
      <ul>
        <li>Monitoring and observability platforms</li>
        <li>Cost optimization and governance</li>
        <li>Incident response and reliability</li>
      </ul>
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