---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Technical Portfolio Development</h2>
  <p class="section-intro-text">Building production-ready infrastructure projects as part of intensive 44-week AI platform engineering development. These projects demonstrate AWS multi-account architecture, Infrastructure as Code automation, and the intersection of business leadership with technical implementation.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Infrastructure & Platform Engineering</h3>
      
      <div class="project-card featured">
        <div class="project-header">
          <h2>AWS Multi-Account Infrastructure Platform</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Platform Engineering</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/terraform-aws.png" alt="AI Platform Infrastructure" />
            </div>
            <a href="https://github.com/JoshuaMichaelHall-Tech/project-aws-infrastructure" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div class="project-description">
            <p>Enterprise-grade AWS infrastructure platform demonstrating multi-account strategy, security best practices, and Infrastructure as Code automation. Built as part of comprehensive AI platform engineering preparation.</p>
            <p><strong>Platform Capabilities:</strong></p>
            <ul>
              <li>Multi-account AWS organization with automated account provisioning</li>
              <li>Terraform modules for repeatable infrastructure deployment</li>
              <li>Self-service developer platform with security guardrails</li>
              <li>Compliance automation for financial services requirements</li>
              <li>Cost optimization through automated resource management</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> AWS (Organizations, Control Tower, IAM), Terraform, GitHub Actions, CloudWatch
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
  <h2>Development Focus Areas</h2>
  
  <div class="value-areas-grid">
    <div class="value-area-item">
      <h3>AWS Platform Development</h3>
      <ul>
        <li>Multi-account organization strategies</li>
        <li>Infrastructure as Code with Terraform</li>
        <li>Security and compliance automation</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Business-Driven Implementation</h3>
      <ul>
        <li>ROI-focused infrastructure decisions</li>
        <li>Cost optimization strategies</li>
        <li>Process automation for efficiency</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>AI/ML Integration Planning</h3>
      <ul>
        <li>SageMaker infrastructure patterns</li>
        <li>MLOps pipeline development</li>
        <li>AI governance frameworks</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Leadership & Documentation</h3>
      <ul>
        <li>Technical decision documentation</li>
        <li>Team collaboration patterns</li>
        <li>Knowledge sharing practices</li>
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