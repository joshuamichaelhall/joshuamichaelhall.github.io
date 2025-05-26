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
        <h3 class="hero-tagline">AWS Certified | Terraform | Security+ | Financial Services Focus</h3>
        <p>Combining proven project management and infrastructure experience with current AWS, Security+, and Terraform certifications for financial services environments.</p>
        <div class="certification-progress">
          <h4>Current Certifications & Timeline:</h4>
          <ul>
            <li>AWS Solutions Architect Associate (August 2025)</li>
            <li>CompTIA Security+ SY0-701 Renewal (October 2025)</li>
            <li>Terraform Associate (November 2025)</li>
          </ul>
          <p class="availability-notice"><strong>Available for DevOps roles: December 2025</strong></p>
        </div>
        <div class="hero-links">
          <a href="/portfolio" class="btn primary-btn cta-main-btn">View Portfolio</a>
          <a href="/assets/resume.pdf" class="btn secondary-btn cta-main-btn">Download Resume</a>
          <a href="/contact#consultation" class="btn outlined-btn cta-main-btn">Schedule Consultation</a>
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
  <p class="section-intro-text">Production-grade infrastructure implementations demonstrating DevOps best practices, security automation, and financial services compliance capabilities.</p>
  <div id="github-projects"></div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</div>

<div class="home-section no-divider" id="articles">
  <h2>Articles</h2>
  <p class="section-intro-text">Technical insights on infrastructure automation, containerization, and cloud security with a focus on financial services environments.</p>
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
  
  .certification-progress {
    background: var(--bg-light);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .certification-progress h4 {
    margin: 0 0 0.75rem 0;
    font-size: 1rem;
    color: var(--secondary-color);
  }
  
  .certification-progress ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .certification-progress li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
  }
  
  .certification-progress li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
  }
  
  .availability-notice {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: var(--primary-color);
    text-align: center;
  }
  
  .hero-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
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

