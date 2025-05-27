---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Infrastructure Projects</h2>
  <p class="section-intro-text">Portfolio projects demonstrating AWS infrastructure automation, security practices, and DevOps workflows. These learning projects showcase my progression in cloud technologies and infrastructure as code.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Infrastructure as Code Projects</h3>
      
      <div class="project-card featured">
        <div class="project-header">
          <h2>AWS Infrastructure with Terraform</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Learning Project</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/terraform-aws.png" alt="Terraform AWS Infrastructure" />
            </div>
            <a href="https://github.com/JoshuaMichaelHall-Tech/project-aws-infrastructure" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div class="project-description">
            <p>Multi-environment AWS infrastructure built with Terraform, focusing on security best practices and compliance controls for financial services environments.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Multi-AZ VPC with network segmentation</li>
              <li>IAM roles and policies with least privilege</li>
              <li>Terraform modules for reusability</li>
              <li>Remote state management with S3 and DynamoDB</li>
              <li>Security controls and compliance scanning</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> AWS (VPC, EC2, RDS, S3, IAM), Terraform, AWS Config, CloudTrail
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>Enhanced Terminal Environment</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Active Development</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/enhanced_terminal_environment.png" alt="Enhanced Terminal Environment" />
            </div>
            <a href="https://github.com/JoshuaMichaelHall-Tech/enhanced-terminal-environment" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div class="project-description">
            <p>Customized developer terminal environment optimized for DevOps workflows with integrated tooling for infrastructure management.</p>
            <p><strong>Features:</strong></p>
            <ul>
              <li>Neovim configuration with DevOps plugins</li>
              <li>Tmux session management</li>
              <li>Custom CLI tools for AWS and Terraform</li>
              <li>Automated setup scripts</li>
              <li>Terminal-based workflow optimization</li>
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
  <h2>Technical Skills</h2>
  
  <div class="value-areas-grid">
    <div class="value-area-item">
      <h3>Cloud Platforms</h3>
      <ul>
        <li>AWS (VPC, EC2, RDS, S3, IAM)</li>
        <li>Multi-account architecture</li>
        <li>Security and compliance controls</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Infrastructure as Code</h3>
      <ul>
        <li>Terraform modules and state management</li>
        <li>Infrastructure validation and testing</li>
        <li>Security as code practices</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Development Tools</h3>
      <ul>
        <li>Terminal-based workflows</li>
        <li>Git and version control</li>
        <li>CI/CD pipeline development</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Security & Compliance</h3>
      <ul>
        <li>Network security design</li>
        <li>Compliance automation</li>
        <li>Security scanning and monitoring</li>
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