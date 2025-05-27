---
layout: default
---

<div class="hero-section with-divider">
  <div class="hero-content">
    <div class="hero-layout">
      <div class="hero-image">
        <img src="/assets/images/headshot.jpg" alt="Joshua Michael Hall" loading="lazy">
      </div>
      <div class="hero-text">
        <h1>Joshua Michael Hall</h1>
        <h2>Infrastructure Automation & Cloud Security Specialist</h2>
        <h3 class="hero-tagline">AWS | Terraform | Security+ | Project Leadership | Financial Services</h3>
        <p>Systematic transition to DevOps combining IT infrastructure background with modern cloud expertise. Completing AWS Solutions Architect, Security+, and Terraform certifications while building hands-on portfolio projects.</p>
        <p><strong>Available for DevOps Engineer roles: December 2025</strong></p>
        <div class="certification-timeline">
          <h4><span class="timeline-icon">🎯</span> Certification Journey 2025</h4>
          <div class="timeline-items">
            <div class="timeline-item">
              <span class="timeline-date">AUG</span>
              <span class="timeline-cert">AWS Solutions Architect Associate</span>
              <span class="timeline-status in-progress">In Progress</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">OCT</span>
              <span class="timeline-cert">CompTIA Security+ SY0-701</span>
              <span class="timeline-status planned">Renewal</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">NOV</span>
              <span class="timeline-cert">HashiCorp Terraform Associate</span>
              <span class="timeline-status planned">Planned</span>
            </div>
          </div>
          <div class="availability-notice">
            <strong>🚀 Targeting DevOps roles starting December 2025</strong>
          </div>
        </div>
        <div class="hero-links">
          <a href="/portfolio" class="btn primary-btn cta-main-btn">View Portfolio</a>
          <a href="https://linkedin.com/in/joshuamichaelhall" class="btn secondary-btn cta-main-btn">Connect on LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="home-section with-divider" id="technical-focus">
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
</div>

<div class="home-section with-divider" id="projects">
  <h2>Projects</h2>
  <p class="section-intro-text">Building portfolio projects to demonstrate DevOps best practices, security automation, and financial services compliance capabilities.</p>
  <div id="github-projects"></div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</div>

<div class="home-section no-divider" id="articles">
  <h2>Articles</h2>
  <p class="section-intro-text">Sharing my learning journey and technical insights on infrastructure automation, containerization, and cloud security.</p>
  <div id="devto-articles"></div>
  <div class="section-link">
    <a href="/blog" class="btn outlined-btn">View All Articles</a>
  </div>
</div>

<div class="home-section no-divider" id="career-vision">
  <h2>Professional Development Roadmap</h2>
  <div class="career-phases">
    <div class="career-phase">
      <div class="phase-content">
        <h3>Cloud Specialization (Current Focus)</h3>
        <p>Advancing cloud architecture expertise through AWS certification and infrastructure automation projects. Combining proven infrastructure experience with modern cloud technologies to deliver secure, compliant solutions for financial services environments.</p>
        <div class="timeline-skills">
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Terraform</span>
          <span class="skill-tag">Infrastructure as Code</span>
          <span class="skill-tag">Security</span>
        </div>
        <div class="timeline-certs">
          <span class="cert-badge">AWS Solutions Architect Associate</span>
          <span class="cert-badge">Terraform Associate</span>
        </div>
      </div>
    </div>
    <div class="career-phase">
      <div class="phase-content">
        <h3>Senior Infrastructure Engineer (Near-term Goal)</h3>
        <p>Targeting senior engineering roles in financial services, leveraging extensive project leadership experience with advanced cloud technologies. Focus on containerization, orchestration, and automated compliance for regulated environments.</p>
        <div class="timeline-skills">
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Kubernetes</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">Financial Compliance</span>
        </div>
        <div class="timeline-certs">
          <span class="cert-badge">AWS DevOps Professional</span>
          <span class="cert-badge">Kubernetes Administrator (CKA)</span>
        </div>
      </div>
    </div>
    <div class="career-phase">
      <div class="phase-content">
        <h3>Principal/Staff Engineer (Long-term Vision)</h3>
        <p>Building toward principal-level roles combining technical depth with proven leadership capabilities. Leveraging comprehensive background in project management, security implementation, and infrastructure automation to drive enterprise-wide initiatives.</p>
        <div class="timeline-skills">
          <span class="skill-tag">Platform Engineering</span>
          <span class="skill-tag">AWS Security</span>
          <span class="skill-tag">Leadership</span>
          <span class="skill-tag">Compliance Automation</span>
        </div>
        <div class="timeline-certs">
          <span class="cert-badge">AWS Solutions Architect Professional</span>
          <span class="cert-badge">AWS Security Specialty</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .hero-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem 2rem 1rem;
    text-align: center;
  }
  
  .hero-image {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
  
  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }
  
  .hero-image:hover img {
    transform: scale(1.05);
  }
  
  .hero-text {
    text-align: center;
  }
  
  .hero-text h1 {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }
  
  .hero-text h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  
  .hero-text p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .hero-tagline {
    font-size: 1.1rem;
    color: var(--text-muted);
    font-weight: 500;
    margin: 0.5rem 0 1rem 0;
  }
  
  /* Enhanced Certification Timeline */
  .certification-timeline {
    background: var(--bg-content);
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 700px;
    box-shadow: var(--card-shadow);
    position: relative;
    overflow: hidden;
  }
  
  .certification-timeline::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
    opacity: 0.05;
    pointer-events: none;
  }
  
  .certification-timeline h4 {
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .timeline-icon {
    font-size: 1.4rem;
  }
  
  .timeline-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .timeline-item {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--bg-content);
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
  }
  
  .timeline-item:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }
  
  .timeline-date {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--primary-color);
    text-align: center;
  }
  
  .timeline-cert {
    font-weight: 600;
    color: var(--text-color);
  }
  
  .timeline-status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .timeline-status.in-progress {
    background: rgba(var(--accent-color-rgb), 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(var(--accent-color-rgb), 0.4);
  }
  
  .timeline-status.planned {
    background: rgba(var(--primary-color-rgb), 0.15);
    color: var(--primary-color);
    border: 1px solid rgba(var(--primary-color-rgb), 0.4);
  }
  
  .availability-notice {
    margin-top: 1.5rem;
    padding: 1rem;
    background: rgba(var(--accent-color-rgb), 0.1);
    border-radius: 8px;
    border: 1px solid rgba(var(--accent-color-rgb), 0.3);
    text-align: center;
  }
  
  .availability-notice strong {
    color: var(--primary-color);
    font-size: 1.1rem;
  }
  
  .hero-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .hero-layout {
      gap: 1.5rem;
      padding: 1.5rem 1rem;
    }
    
    .hero-image {
      width: 180px;
      height: 180px;
    }
    
    .certification-timeline {
      padding: 1.5rem;
      margin: 1.5rem auto;
    }
    
    .timeline-item {
      grid-template-columns: 50px 1fr;
      gap: 0.75rem;
    }
    
    .timeline-status {
      grid-column: 2;
      justify-self: start;
      margin-top: 0.25rem;
    }
    
    .hero-links {
      flex-wrap: wrap;
    }
  }
  
  @media (max-width: 480px) {
    .hero-layout {
      gap: 1rem;
      padding: 1rem;
    }
    
    .hero-image {
      width: 150px;
      height: 150px;
    }
    
    .hero-links {
      gap: 0.5rem;
    }
    
    .hero-links .btn {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }
</style>

<style>
  .career-phases {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .career-phase {
    background: var(--bg-content);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 2rem;
    transition: box-shadow 0.3s ease;
  }
  
  .career-phase:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  .phase-content h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-size: 1.4rem;
    font-weight: 600;
  }
  
  .phase-content p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .career-phases {
      gap: 1.5rem;
    }
    
    .career-phase {
      padding: 1.5rem;
    }
  }
</style>
