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
        <h2>Experienced Leader Transitioning to AI Platform Engineering</h2>
        <h3 class="hero-tagline">Comprehensive Development Program | AWS AI/ML & MLOps Focus | Remote-First</h3>
        <p>Experienced business leader executing comprehensive AI platform engineering development, combining 5+ years of P&L management and team leadership with systematic technical mastery. Building AWS AI/ML infrastructure expertise through intensive preparation targeting DevOps Engineer with AI Enhancement roles in financial services.</p>
        <div class="certification-timeline">
          <h4><span class="timeline-icon">🎯</span> Comprehensive AI Platform Engineering Development</h4>
          <div class="timeline-items">
            <div class="timeline-item">
              <span class="timeline-date">Phase 1</span>
              <span class="timeline-cert">AWS Solutions Architect + Security+ + Terraform</span>
              <span class="timeline-status planned">Foundation Mastery</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">Phase 2</span>
              <span class="timeline-cert">CAPM + CKA + MLOps Pipelines</span>
              <span class="timeline-status planned">Advanced Specialization</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-date">Phase 3</span>
              <span class="timeline-cert">AWS DevOps Pro + AI/ML Specialty</span>
              <span class="timeline-status planned">Executive Preparation</span>
            </div>
          </div>
          <div class="availability-notice">
            <strong>🚀 Systematically building deep AI platform engineering competency for DevOps roles in financial services</strong>
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
  <h2>Leadership Foundation & AI Platform Development</h2>
  <div class="tech-focus-grid">
    <div class="tech-focus-item">
      <h3>Proven Business Leadership</h3>
      <p>Founded and scaled technology services company with full P&L responsibility. Led 13-person technical teams through enterprise deployments of 5,000+ systems across multiple locations.</p>
    </div>
    <div class="tech-focus-item">
      <h3>AI Platform Engineering Focus</h3>
      <p>Building comprehensive AWS AI/ML infrastructure expertise including SageMaker, Bedrock, and Comprehend. Developing MLOps pipeline automation for model deployment and scaling.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Infrastructure as Code Mastery</h3>
      <p>Creating Terraform modules for AI workload deployment patterns. Establishing CI/CD automation optimized for machine learning model lifecycle management.</p>
    </div>
    <div class="tech-focus-item">
      <h3>Business-Driven Technology</h3>
      <p>Applying P&L management experience to quantify AI ROI and infrastructure cost optimization. Building ML governance expertise for financial services compliance.</p>
    </div>
  </div>
</div>

<div class="home-section with-divider" id="projects">
  <h2>Technical Portfolio Development</h2>
  <p class="section-intro-text">Building production-ready AWS infrastructure projects demonstrating AI service integration, MLOps automation, and enterprise-scale platform engineering with measurable business impact.</p>
  <div id="github-projects"></div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</div>

<div class="home-section no-divider" id="articles">
  <h2>Learning Journey Insights</h2>
  <p class="section-intro-text">Documenting technical discoveries, certification progress, and the strategic transition from proven business leadership to AI platform engineering excellence.</p>
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
