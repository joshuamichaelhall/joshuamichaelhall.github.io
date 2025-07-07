---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Project Portfolio

<div class="content-section with-divider">
  <h2>Production Systems & Business Impact</h2>
  <p class="section-intro-text">Not another home lab hobbyist - building enterprise-grade infrastructure while helping engineers reach $150K+. Every project demonstrates real business value learned from building a $250K MSP.</p>

  <div class="portfolio-timeline">
    <div class="timeline-section">
      <h3>Active Projects</h3>
      
      <div class="project-card featured">
        <div class="project-header">
          <h2>Enterprise Network Security Infrastructure</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Phase 1 - Active Deployment</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/security-automation.png" alt="Network Security Infrastructure" />
            </div>
          </div>
          <div class="project-description">
            <p>Deploying production-grade pfSense infrastructure protecting $200K+ remote opportunities. Not a home lab - enterprise patterns with multi-WAN failover, advanced monitoring, and security policies based on MSP best practices.</p>
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
          <h2>Kubernetes Home Lab for CKA</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Daily Practice - 3+ Hours</div>
        </div>
        <div class="project-content-section">
          <div class="project-description">
            <p>Building production Kubernetes patterns for CKA certification (March 2025). Not just following tutorials - implementing real cluster management, security policies, and GitOps workflows that demonstrate platform engineering expertise.</p>
            <p><strong>Implementation Focus:</strong></p>
            <ul>
              <li>Multi-master cluster with production-grade networking</li>
              <li>RBAC and security policies for enterprise compliance</li>
              <li>GitOps with ArgoCD for declarative deployments</li>
              <li>Monitoring stack with Prometheus and Grafana</li>
              <li>Cost optimization through resource management</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Kubernetes, Docker, ArgoCD, Prometheus, Grafana, Helm, Terraform
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>AWS Multi-Region Infrastructure</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Upcoming - Q2 2025</div>
        </div>
        <div class="project-content-section">
          <div class="project-image-section">
            <div class="project-image">
              <img src="/assets/images/kubernetes.png" alt="Platform Engineering" />
            </div>
          </div>
          <div class="project-description">
            <p>Demonstrating cloud architecture skills through multi-region AWS infrastructure. Applying MSP cost optimization experience to achieve enterprise patterns at <$100/month.</p>
            <p><strong>Architecture Components:</strong></p>
            <ul>
              <li>Multi-region deployment with automated failover</li>
              <li>Infrastructure as Code with Terraform modules</li>
              <li>Cost optimization through spot instances and reserved capacity</li>
              <li>Security best practices with GuardDuty and Config</li>
              <li>Compliance automation for SOC2 requirements</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> AWS, Terraform, Python, CloudFormation, Lambda, EventBridge
            </p>
          </div>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h2>Portfolio Website Platform Engineering</h2>
        </div>
        <div class="project-status-line">
          <div class="project-status">Continuous Enhancement</div>
        </div>
        <div class="project-content-section">
          <div class="project-description">
            <p>This website itself demonstrates platform engineering principles. Not just a static site - includes CI/CD, monitoring, and serves multiple audiences strategically.</p>
            <p><strong>Technical Implementation:</strong></p>
            <ul>
              <li>Jekyll static site with GitHub Pages deployment</li>
              <li>GitHub Actions for automated builds and testing</li>
              <li>Performance optimization for global delivery</li>
              <li>SEO and analytics for career visibility</li>
              <li>Multi-audience content strategy</li>
            </ul>
            <p><strong>Strategic Purpose:</strong></p>
            <ul>
              <li>Primary: Platform engineering recruiters</li>
              <li>Secondary: Engineers seeking career coaching</li>
              <li>Tertiary: MSP industry connections</li>
            </ul>
            <p class="technologies">
              <strong>Technologies:</strong> Jekyll, GitHub Actions, CloudFlare, Google Analytics, SEO
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
      <h3>Platform Engineering</h3>
      <ul>
        <li>Kubernetes (3+ hours daily)</li>
        <li>Infrastructure as Code</li>
        <li>CI/CD pipelines</li>
        <li>Cost optimization</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Business Acumen</h3>
      <ul>
        <li>P&L management ($250K)</li>
        <li>Vendor negotiations</li>
        <li>ROI-focused decisions</li>
        <li>Team leadership</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>Career Coaching</h3>
      <ul>
        <li>$150K+ positioning</li>
        <li>Strategic skill development</li>
        <li>Interview preparation</li>
        <li>Free consultations</li>
      </ul>
    </div>
    
    <div class="value-area-item">
      <h3>MSP Expertise</h3>
      <ul>
        <li>40+ client management</li>
        <li>95% retention rate</li>
        <li>Clean exit execution</li>
        <li>Operational excellence</li>
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