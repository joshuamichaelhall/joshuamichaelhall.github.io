---
layout: default
---

<div class="hero-section with-divider">
  <div class="hero-content">
    <h1>Joshua Michael Hall</h1>
    <h2>DevOps/SRE Engineer | Financial Services Focus</h2>
    <p>Building secure, reliable infrastructure through automation, containerization, and DevOps practices.</p>
    <div class="hero-links">
      <a href="/portfolio" class="btn primary-btn">View Portfolio</a>
      <a href="/contact" class="btn secondary-btn">Contact Me</a>
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
  <p class="section-description">Production-grade infrastructure implementations demonstrating DevOps best practices, security automation, and financial services compliance capabilities.</p>
  <div id="github-projects"></div>
  <div class="section-link">
    <a href="/portfolio" class="btn outlined-btn">View All Projects</a>
  </div>
</div>

<div class="home-section no-divider" id="articles">
  <h2>Articles</h2>
  <p class="section-description">Technical insights on infrastructure automation, containerization, and cloud security with a focus on financial services environments.</p>
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
        <h3>2025: Mid-Level DevOps Engineer</h3>
        <p>Implementing secure infrastructure for financial services using AWS cloud and infrastructure as code. Building automated deployment pipelines, containerization solutions, and compliance controls for regulated environments.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Kubernetes</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">AWS Solutions Architect Associate (Aug 2025)</span>
            <span class="cert-badge">Terraform Associate (Oct 2025)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2026-2027: Senior DevOps Engineer</h3>
        <p>Designing and leading implementation of scalable cloud platforms with integrated security. Architecting multi-environment infrastructure with high availability, disaster recovery, and financial compliance controls.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">Platform Design</span>
            <span class="skill-tag">Security</span>
            <span class="skill-tag">Performance</span>
            <span class="skill-tag">Monitoring</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">Kubernetes Admin (CKA) (Feb 2026)</span>
            <span class="cert-badge">AWS DevOps Pro (Nov 2026)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2028+: Senior Platform Engineer</h3>
        <p>Leading platform engineering initiatives for financial services organizations. Creating self-service infrastructure platforms, implementing automated compliance frameworks, and driving technical innovation.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">Architecture</span>
            <span class="skill-tag">Leadership</span>
            <span class="skill-tag">Compliance</span>
            <span class="skill-tag">Innovation</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">AWS Security Specialty (Early 2027)</span>
            <span class="cert-badge">Kubernetes Security (CKS) (Mid 2027)</span>
          </div>
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