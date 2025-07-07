---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Current Projects & Portfolio Development</h2>
  <p class="section-intro-text">Building real projects as part of 48-week platform engineering journey. Currently focused on Phase 1 network security infrastructure with pfSense, followed by CRM implementation and platform engineering portfolio development.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Active Projects</h3>
      
      <div class="project-card featured">
        <div class="project-header">
          <h2>Phase 1: Network Security Infrastructure</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Currently Implementing</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/security-automation.png" alt="Network Security Infrastructure" />
            </div>
          </div>
          <div class="project-description">
            <p>Implementing pfSense-based network security infrastructure as Phase 1 of platform engineering journey. Real-world project demonstrating security fundamentals, network architecture, and infrastructure management skills.</p>
            <p><strong>Project Components:</strong></p>
            <ul>
              <li>pfSense firewall configuration and management</li>
              <li>Network segmentation and VLAN implementation</li>
              <li>VPN setup for secure remote access</li>
              <li>Security policies and rule management</li>
              <li>Monitoring and logging infrastructure</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> pfSense, Network Security, VPN, Firewall Management, VLAN Configuration
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>Phase 2: CRM Implementation</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Upcoming Project</div>
        </div>
        <div class="project-content-section">
          <div class="project-description">
            <p>Next phase: Implementing customer relationship management system. Combines business process understanding from ownership experience with technical implementation skills.</p>
            <p><strong>Planned Features:</strong></p>
            <ul>
              <li>Customer data management and tracking</li>
              <li>Business process automation</li>
              <li>Integration with existing systems</li>
              <li>Reporting and analytics</li>
              <li>Security and compliance considerations</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> CRM Platform (TBD), API Integration, Database Management, Business Process Automation
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>Platform Engineering Portfolio</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">In Development</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/kubernetes.png" alt="Platform Engineering" />
            </div>
          </div>
          <div class="project-description">
            <p>Building portfolio of platform engineering projects to demonstrate practical skills. Focus on Kubernetes, Infrastructure as Code, and CI/CD pipelines.</p>
            <p><strong>Portfolio Components:</strong></p>
            <ul>
              <li>Kubernetes cluster deployment and management</li>
              <li>Terraform modules for infrastructure automation</li>
              <li>CI/CD pipeline implementations</li>
              <li>Container orchestration projects</li>
              <li>Monitoring and observability solutions</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Kubernetes, Terraform, Docker, GitHub Actions, Prometheus
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

<div class="content-section">
  <h2>Daily Focus Areas</h2>
  
  <div class="value-areas-grid">
    <div class="value-area-item">
      <h3>Kubernetes Mastery</h3>
      <ul>
        <li>Daily hands-on practice</li>
        <li>CKA curriculum study</li>
        <li>Building practice clusters</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Network Security</h3>
      <ul>
        <li>pfSense implementation</li>
        <li>Security fundamentals</li>
        <li>Network architecture</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Infrastructure as Code</h3>
      <ul>
        <li>Terraform learning</li>
        <li>GitOps workflows</li>
        <li>Automation practices</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Business Value</h3>
      <ul>
        <li>Practical implementations</li>
        <li>Real-world problem solving</li>
        <li>Value-driven development</li>
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