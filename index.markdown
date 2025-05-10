<div class="hero-section with-divider">
  <div class="hero-content">
    <h1 style="font-size: 3.5rem; margin-bottom: 0.5rem;">Joshua Michael Hall</h1>
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
            <span class="cert-badge">AWS Solutions Architect</span>
            <span class="cert-badge">Terraform Associate</span>
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
            <span class="cert-badge">Kubernetes Admin</span>
            <span class="cert-badge">AWS DevOps Pro</span>
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
            <span class="cert-badge">AWS Security</span>
            <span class="cert-badge">K8s Security</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.timeline-details-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
  justify-content: space-between;
}

.timeline-skills, .timeline-certs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background-color: rgba(46, 164, 79, 0.1);
  border: 1px solid rgba(46, 164, 79, 0.2);
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 0.85rem;
  color: var(--accent-color);
  display: inline-block;
}

.cert-badge {
  background-color: rgba(3, 102, 214, 0.1);
  border: 1px solid rgba(3, 102, 214, 0.2);
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 0.85rem;
  color: var(--primary-color);
  display: inline-block;
}

.dark-theme .skill-tag {
  background-color: rgba(46, 164, 79, 0.15);
  border: 1px solid rgba(46, 164, 79, 0.25);
  color: #3fb950;
}

.dark-theme .cert-badge {
  background-color: rgba(88, 166, 255, 0.15);
  border: 1px solid rgba(88, 166, 255, 0.25);
  color: #58a6ff;
}

@media (max-width: 768px) {
  .timeline-details-row {
    flex-direction: column;
    gap: 10px;
  }
}
</style>

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