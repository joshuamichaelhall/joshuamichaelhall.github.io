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
        <h2>AI-Enhanced Platform Engineering Professional</h2>
        <h3 class="hero-tagline">5+ Years Proven Leadership | AWS SageMaker & MLOps | Financial Services Focus</h3>
        <p>AI-Enhanced Platform Engineering professional combining 5+ years of proven leadership experience with intensive technical skill development in AWS AI/ML services, MLOps automation, and platform engineering for financial services. Combining proven people leadership with systematic AI platform engineering skill development to drive AI transformation and team success.</p>
        <div class="certification-timeline">
          <h4><span class="timeline-icon">🎯</span> AI-Enhanced Technical Journey</h4>
          <div class="timeline-items">
            <div class="timeline-item">
              <span class="timeline-date">Foundation</span>
              <span class="timeline-cert">AWS SAA + AI/ML Services</span>
              <span class="timeline-status planned">AI Cloud Architecture</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">Specialization</span>
              <span class="timeline-cert">Terraform + MLOps Automation</span>
              <span class="timeline-status planned">AI Infrastructure as Code</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">Advanced</span>
              <span class="timeline-cert">AWS AI/ML Specialty + Platform</span>
              <span class="timeline-status planned">AI Platform Engineering</span>
            </div>
          </div>
          <div class="availability-notice">
            <strong>🚀 Building AI platform expertise with proven leadership for MLOps team management</strong>
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

<div class="home-section with-divider" id="leadership-focus">
  <h2>AI Platform Leadership & Technical Expertise</h2>
  <div class="tech-focus-grid">
    <div class="tech-focus-item">
      <h3>Proven Leadership Foundation</h3>
      <p>5+ years leading technical teams through enterprise-scale deployments, now focusing on MLOps team management and AI transformation.</p>
    </div>
    <div class="tech-focus-item">
      <h3>AI Platform Engineering</h3>
      <p>Developing comprehensive AWS AI/ML infrastructure expertise with SageMaker, Bedrock, and MLOps automation for financial services.</p>
    </div>
    <div class="tech-focus-item">
      <h3>MLOps Automation</h3>
      <p>Building Infrastructure as Code for AI workloads using Terraform, with emphasis on scalable ML deployment patterns.</p>
    </div>
    <div class="tech-focus-item">
      <h3>AI Business Impact</h3>
      <p>Translating AI technical implementations into measurable business value and ROI for financial services transformation.</p>
    </div>
  </div>
</div>

<div class="home-section with-divider" id="projects">
  <h2>AI Platform Projects</h2>
  <p class="section-intro-text">Building AI-enhanced portfolio showcasing MLOps implementations, AI infrastructure automation, and quantified business impact from AI platform initiatives.</p>
  <div id="github-projects"></div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</div>

<div class="home-section no-divider" id="articles">
  <h2>AI Platform Insights</h2>
  <p class="section-intro-text">Sharing AI transformation insights, MLOps implementation experiences, and the intersection of proven leadership with AI platform engineering development.</p>
  <div id="devto-articles"></div>
  <div class="section-link">
    <a href="/blog" class="btn outlined-btn">View All Articles</a>
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
    gap: 0.75rem;
    margin-bottom: 2rem;
    position: relative;
  }
  
  /* Remove any pseudo-elements that might create lines */
  .timeline-items::before,
  .timeline-items::after,
  .timeline-item::before,
  .timeline-item::after {
    display: none !important;
  }
  
  .timeline-item {
    display: grid !important;
    grid-template-columns: 60px 1fr auto;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(3, 102, 214, 0.1) !important;
    border-radius: 8px;
    border: 2px solid var(--border-color) !important;
    transition: all 0.3s ease;
    margin-bottom: 0.75rem;
    visibility: visible !important;
    opacity: 1 !important;
    height: auto !important;
    min-height: 60px;
    position: relative;
    z-index: 1;
  }
  
  .timeline-item:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }
  
  .timeline-date {
    font-weight: 700 !important;
    font-size: 1.1rem !important;
    color: var(--primary-color) !important;
    text-align: center;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    text-decoration: none !important;
  }
  
  .timeline-cert {
    font-weight: 600 !important;
    color: var(--text-color) !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    text-decoration: none !important;
  }
  
  .timeline-status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem !important;
    font-weight: 600 !important;
    text-transform: uppercase;
    display: inline-block !important;
    white-space: nowrap;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  .timeline-status.in-progress {
    background: rgba(227, 98, 9, 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(227, 98, 9, 0.4);
  }
  
  .timeline-status.planned {
    background: rgba(3, 102, 214, 0.15);
    color: var(--primary-color);
    border: 1px solid rgba(3, 102, 214, 0.4);
  }
  
  .availability-notice {
    margin-top: 2.5rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, rgba(var(--primary-color), 0.05) 0%, rgba(var(--primary-color), 0.1) 100%);
    border-radius: 12px;
    border: 2px solid var(--primary-color);
    text-align: center;
    clear: both;
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
      grid-template-columns: 1fr;
      gap: 0.5rem;
      text-align: left;
    }
    
    .timeline-date {
      font-size: 0.9rem !important;
      margin-bottom: 0.25rem;
      text-align: left;
    }
    
    .timeline-cert {
      margin-bottom: 0.5rem;
    }
    
    .timeline-status {
      justify-self: start;
      margin-top: 0;
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
