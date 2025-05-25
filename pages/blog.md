---
layout: page
title: Blog
permalink: /blog/
---

# Technical Blog

<div class="content-section with-divider">
  <h2>Featured Articles</h2>
  <p class="section-intro-text">In-depth technical tutorials and insights for infrastructure automation, containerization, and DevOps practices in financial services environments.</p>

  <div class="articles-container">
    <div class="project-card">
      <div class="project-content">
        <div class="project-image">
          <img src="/assets/images/infrastructure_as_code_article_icon.png" alt="Infrastructure as Code Best Practices for Financial Services" loading="lazy">
        </div>
        <div class="project-details">
          <div class="project-header">
            <h3>Infrastructure as Code Best Practices for Financial Services</h3>
            <a href="/blog/2025/05/05/infrastructure-as-code-best-practices/" class="btn primary-btn">Read Article</a>
          </div>
          <p class="post-date">May 5, 2025</p>
          <p class="project-description">A comprehensive guide to implementing infrastructure as code with Terraform in financial services environments, focusing on security, compliance, and operational excellence.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="content-section with-divider">
  <h2>Published Articles</h2>
  <p class="section-intro-text">Technical articles covering AWS specialization, infrastructure automation, and security engineering for financial services applications.</p>

  <div class="articles-container">
    {% for post in site.posts %}
      {% include blog-post-preview.html post=post %}
    {% endfor %}
  </div>
</div>

<div class="content-section with-divider">
  <h2>Upcoming Technical Content</h2>
  <p class="section-intro-text">My upcoming content focuses on building expertise in AWS for financial services, infrastructure automation, and security engineering.</p>

  <div class="articles-container">
    <div class="project-card">
      <h3>Setting Up a Secure AWS Learning Environment for Financial Services</h3>
      <p>A step-by-step guide to creating a secure, cost-effective AWS environment for learning infrastructure automation and security practices with financial services focus.</p>
      <p class="post-date">Coming Soon</p>
    </div>

    <div class="project-card">
      <h3>AWS Security Automation for Financial Services</h3>
      <p>Implementing automated security controls, compliance validation, and evidence collection for financial services workloads on AWS.</p>
      <p class="post-date">Coming Soon</p>
    </div>

    <div class="project-card">
      <h3>Financial Services DevOps: Architecture and Compliance Blueprint</h3>
      <p>A comprehensive reference architecture for regulated environments with security and compliance automation strategies for financial services workloads.</p>
      <p class="post-date">Coming Soon</p>
    </div>
  </div>
</div>

<div class="content-section">
  <h2>Content Focus Areas</h2>
  <p class="section-intro-text">My content strategy focuses on demonstrating expertise in financial services DevOps, cloud architecture, and technical leadership.</p>

  <div class="content-timeline">
    <div class="timeline-phase">
      <h3>Foundation Building (Current Focus)</h3>
      <ul class="timeline-list">
        <li><strong>AWS Core Infrastructure:</strong> Secure environments, IAM best practices, multi-account strategies</li>
        <li><strong>Infrastructure as Code:</strong> Terraform fundamentals, module design, compliance integration</li>
        <li><strong>Security Automation:</strong> Compliance controls, evidence collection, audit readiness</li>
        <li><strong>DevOps Productivity:</strong> Terminal workflows, automation techniques, efficiency patterns</li>
      </ul>
    </div>
    
    <div class="timeline-phase">
      <h3>Technical Depth (3-6 Month Horizon)</h3>
      <ul class="timeline-list">
        <li><strong>CI/CD Pipeline Design:</strong> Security integration, validation gates, compliance verification</li>
        <li><strong>Container Security:</strong> Image scanning, runtime protection, secure deployment patterns</li>
        <li><strong>Infrastructure as Code Advanced:</strong> Multi-environment strategies, testing, state management</li>
        <li><strong>Observability:</strong> Monitoring, logging, and alerting for regulated workloads</li>
      </ul>
    </div>
    
    <div class="timeline-phase">
      <h3>Future Direction (6+ Month Horizon)</h3>
      <ul class="timeline-list">
        <li><strong>Cloud Security:</strong> Advanced security architecture, data protection, automated remediation</li>
        <li><strong>Kubernetes Platform:</strong> Service mesh, governance frameworks, security architecture</li>
        <li><strong>Business Impact:</strong> ROI demonstration, executive communication, strategic planning</li>
        <li><strong>Technical Leadership:</strong> Cross-functional initiatives, mentoring, architecture decisions</li>
      </ul>
    </div>
  </div>
</div>

<div class="content-section linkedin-cta">
  <h2>Stay Connected for Technical Insights</h2>
  <p class="section-intro-text">I regularly share technical articles, infrastructure best practices, and DevOps insights for financial services on LinkedIn. Join my network to stay updated on the latest trends in cloud architecture, security automation, and infrastructure as code.</p>
  
  <div class="cta-box">
    <h3>Follow on LinkedIn</h3>
    <p>Get notified when I publish new technical content, share industry insights, or announce upcoming projects. Let's build a community focused on advancing DevOps practices in financial services.</p>
    <a href="https://www.linkedin.com/in/joshuamichaelhall" class="btn primary-btn linkedin-btn" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-linkedin"></i> Follow Joshua on LinkedIn
    </a>
  </div>
</div>