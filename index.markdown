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
        <h3>2025: Foundation & Advanced Skills</h3>
        <p>Building foundational DevOps skills through certifications and hands-on projects. Developing expertise in AWS cloud, infrastructure as code, containerization, and Linux administration. Creating portfolio projects to demonstrate multi-environment infrastructure automation and CI/CD implementation.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Terraform</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Kubernetes</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">AWS Solutions Architect Associate</span>
            <span class="cert-badge">Terraform Associate</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2026: Mid-Level DevOps Engineer</h3>
        <p>Securing mid-level DevOps/SRE position focused on financial services. Implementing security automation with compliance focus, building domain knowledge in regulatory requirements, and advancing containerization expertise with service mesh and Kubernetes operators.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">Financial Compliance</span>
            <span class="skill-tag">Security Automation</span>
            <span class="skill-tag">Observability</span>
            <span class="skill-tag">Architecture</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">Kubernetes Admin (CKA)</span>
            <span class="cert-badge">AWS DevOps Pro</span>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>2026-2027: Senior Role Preparation</h3>
        <p>Developing platform engineering expertise for financial services environments. Building technical leadership skills, implementing advanced compliance frameworks, and positioning for senior role advancement through architectural design and mentoring.</p>
        <div class="timeline-details-row">
          <div class="timeline-skills">
            <span class="skill-tag">Platform Engineering</span>
            <span class="skill-tag">Leadership</span>
            <span class="skill-tag">Compliance Frameworks</span>
            <span class="skill-tag">Disaster Recovery</span>
          </div>
          <div class="timeline-certs">
            <span class="cert-badge">AWS Security Specialty</span>
            <span class="cert-badge">Kubernetes Security (CKS)</span>
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