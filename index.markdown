---
layout: default
---

<div class="hero-section with-divider">
  <div class="hero-content">
    <h1>Joshua Michael Hall</h1>
    <h2>DevOps/SRE Engineer | Financial Services Focus</h2>
    <p>Building secure, reliable infrastructure through automation, containerization, and DevOps practices.</p>
    <p class="building-in-public"><span class="highlight">Building in public:</span> Follow my DevOps career journey as it happens</p>
    <div class="hero-links">
      <a href="/portfolio" class="btn primary-btn">View Portfolio</a>
      <a href="/roadmap" class="btn accent-btn">Learning Roadmap</a>
      <a href="/contact" class="btn secondary-btn">Contact Me</a>
    </div>
  </div>
</div>

<div class="dashboard-promo with-divider">
  <div class="dashboard-promo-header">
    <img src="/assets/images/dashboard-icon.png" alt="DevOps Career Dashboard" class="dashboard-icon">
    <div>
      <h2 class="dashboard-promo-title">DevOps Career Dashboard</h2>
      <p class="dashboard-promo-subtitle">Skills tracking and career analytics for DevOps professionals</p>
    </div>
  </div>
  
  <a href="https://devops-dashboard.joshuamichaelhall.com" class="dashboard-preview" target="_blank">
    <img src="/assets/images/dashboard/dashboard-overview.png" alt="DevOps Career Dashboard Preview">
  </a>
  
  <div class="dashboard-features">
    <span class="dashboard-feature">Skills Tracker</span>
    <span class="dashboard-feature">Learning Resources</span>
    <span class="dashboard-feature">Progress Analytics</span>
    <span class="dashboard-feature">Real-time Updates</span>
    <span class="dashboard-feature">Network Connections</span>
  </div>
  
  <div class="dashboard-cta">
    <a href="https://devops-dashboard.joshuamichaelhall.com" class="btn primary-btn" target="_blank">Launch Dashboard</a>
    <a href="/dashboard" class="btn outlined-btn">Learn More</a>
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
  <h2>Career Vision</h2>
  <div class="career-timeline">
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>Foundation Building</h3>
        <p>Building foundational DevOps skills through AWS certification and hands-on infrastructure projects. Developing expertise in AWS cloud architecture, Terraform for infrastructure as code, and security automation for financial services environments.</p>
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
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>Mid-Level DevOps Engineer</h3>
        <p>Focus on DevOps/SRE position in financial services, implementing Docker containerization, Kubernetes orchestration, and CI/CD pipelines with strong security and compliance focus. Building specialized expertise in regulated cloud environments.</p>
        <div class="timeline-skills">
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Kubernetes</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">Financial Compliance</span>
        </div>
        <div class="timeline-certs">
          <span class="cert-badge">AWS DevOps Professional</span>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>Senior Platform Engineer</h3>
        <p>Advancing to senior platform engineering role in financial services sector. Specializing in advanced security automation, platform engineering, and implementing financial compliance frameworks as code while developing technical leadership skills.</p>
        <div class="timeline-skills">
          <span class="skill-tag">Platform Engineering</span>
          <span class="skill-tag">AWS Security</span>
          <span class="skill-tag">Kubernetes Security</span>
          <span class="skill-tag">Compliance Automation</span>
        </div>
        <div class="timeline-certs">
          <span class="cert-badge">AWS Security Specialty</span>
          <span class="cert-badge">Kubernetes Administrator (CKA)</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Add animation to timeline items
  document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.5 });
    
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  });
</script>