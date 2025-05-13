---
layout: page
title: DevOps Career Dashboard
permalink: /dashboard/
---

<div class="dashboard-container">
  <header class="dashboard-header">
    <h1>DevOps Career Dashboard</h1>
    <div class="current-phase">Current Phase: Foundation Building (Phase 1)</div>
  </header>

  <div class="dashboard-nav">
    <ul class="dashboard-tabs">
      <li data-tab="overview" class="active"><i class="fas fa-chart-line"></i> Overview</li>
      <li data-tab="skills"><i class="fas fa-award"></i> Skills</li>
      <li data-tab="projects"><i class="fas fa-briefcase"></i> Projects</li>
      <li data-tab="learning"><i class="fas fa-book"></i> Learning</li>
      <li data-tab="certs"><i class="fas fa-certificate"></i> Certifications</li>
    </ul>
  </div>

  <div class="dashboard-content">
    <!-- Overview Tab (Default) -->
    <div id="overview" class="dashboard-tab active">
      <div class="dashboard-grid">
        <div class="dashboard-card roadmap-progress">
          <h2>Career Roadmap Progress</h2>
          <div class="progress-phases">
            <div class="phase">
              <div class="phase-header">
                <span class="phase-name">Foundation Building</span>
                <span class="phase-duration">Months 1-6</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 10%;"></div>
              </div>
              <p class="phase-desc">AWS, Terraform, Docker fundamentals</p>
            </div>
            <div class="phase">
              <div class="phase-header">
                <span class="phase-name">Advanced Skills Development</span>
                <span class="phase-duration">Months 7-12</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;"></div>
              </div>
              <p class="phase-desc">Kubernetes, CI/CD, advanced AWS</p>
            </div>
            <div class="phase">
              <div class="phase-header">
                <span class="phase-name">Mid-Level Position Attainment</span>
                <span class="phase-duration">Months 13-18</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;"></div>
              </div>
              <p class="phase-desc">Security, compliance, financial services expertise</p>
            </div>
            <div class="phase">
              <div class="phase-header">
                <span class="phase-name">Senior Role Preparation</span>
                <span class="phase-duration">Months 19-24</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;"></div>
              </div>
              <p class="phase-desc">Platform engineering, technical leadership</p>
            </div>
          </div>
        </div>

        <div class="dashboard-card weekly-metrics">
          <h2>Weekly Metrics</h2>
          <div class="metrics-grid">
            <div class="metric-item">
              <p class="metric-value">0</p>
              <p class="metric-label">Learning Hours</p>
              <p class="metric-target">Target: 25</p>
            </div>
            <div class="metric-item">
              <p class="metric-value">0</p>
              <p class="metric-label">Project Hours</p>
              <p class="metric-target">Target: 12.5</p>
            </div>
            <div class="metric-item">
              <p class="metric-value">0</p>
              <p class="metric-label">Networking Hours</p>
              <p class="metric-target">Target: 7.5</p>
            </div>
            <div class="metric-item">
              <p class="metric-value">0</p>
              <p class="metric-label">New Connections</p>
              <p class="metric-target">Target: 25-30</p>
            </div>
          </div>
        </div>

        <div class="dashboard-card upcoming-goals">
          <h2>Upcoming Goals</h2>
          <ul class="goals-list">
            <li>
              <div class="goal-checkbox"></div>
              <span class="goal-text">Complete AWS VPC section in Cantrill course</span>
            </li>
            <li>
              <div class="goal-checkbox"></div>
              <span class="goal-text">Create first VPC architecture in AWS</span>
            </li>
            <li>
              <div class="goal-checkbox"></div>
              <span class="goal-text">Connect with 25-30 AWS specialists this week</span>
            </li>
            <li>
              <div class="goal-checkbox"></div>
              <span class="goal-text">Publish first technical article on AWS VPC</span>
            </li>
            <li>
              <div class="goal-checkbox"></div>
              <span class="goal-text">Complete chapters 4-5 of "How Linux Works"</span>
            </li>
          </ul>
        </div>

        <div class="dashboard-card cert-progress">
          <h2>Certification Progress</h2>
          <div class="cert-list">
            <div class="cert-item">
              <div class="cert-header">
                <span class="cert-name">AWS Solutions Architect Associate</span>
                <span class="cert-status in-progress">In Progress</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 10%;"></div>
              </div>
              <p class="cert-timeline">Target: Q3-Q4 2025</p>
            </div>
            <div class="cert-item">
              <div class="cert-header">
                <span class="cert-name">HashiCorp Terraform Associate</span>
                <span class="cert-status planned">Planned</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 0%;"></div>
              </div>
              <p class="cert-timeline">Target: Q4 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Tab -->
    <div id="skills" class="dashboard-tab">
      <h2>Skills Tracker</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Cloud</h3>
          <p class="skill-proficiency">Proficiency: Beginner</p>
          <ul class="skills-list">
            <li>AWS EC2</li>
            <li>AWS VPC</li>
            <li>AWS S3</li>
            <li>AWS IAM</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Infrastructure as Code</h3>
          <p class="skill-proficiency">Proficiency: Beginner</p>
          <ul class="skills-list">
            <li>Terraform Basics</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Linux</h3>
          <p class="skill-proficiency">Proficiency: Beginner</p>
          <ul class="skills-list">
            <li>Basic Commands</li>
            <li>File System</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Containerization</h3>
          <p class="skill-proficiency">Proficiency: Not Started</p>
          <p class="no-skills">No skills recorded yet</p>
        </div>
        <div class="skill-category">
          <h3>CI/CD</h3>
          <p class="skill-proficiency">Proficiency: Not Started</p>
          <p class="no-skills">No skills recorded yet</p>
        </div>
        <div class="skill-category">
          <h3>Monitoring</h3>
          <p class="skill-proficiency">Proficiency: Not Started</p>
          <p class="no-skills">No skills recorded yet</p>
        </div>
      </div>
    </div>

    <!-- Projects Tab -->
    <div id="projects" class="dashboard-tab">
      <h2>Projects Tracker</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>AWS Infrastructure Automation</h3>
          <div class="project-details">
            <span class="project-status">Status: Planning</span>
            <span class="project-progress">5% Complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 5%;"></div>
          </div>
          <div class="project-actions">
            <button class="project-btn update-btn">Update Progress</button>
            <button class="project-btn view-btn">View Details</button>
          </div>
        </div>
        <div class="project-card">
          <h3>Multi-Environment Infrastructure</h3>
          <div class="project-details">
            <span class="project-status">Status: Not Started</span>
            <span class="project-progress">0% Complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <div class="project-actions">
            <button class="project-btn update-btn">Update Progress</button>
            <button class="project-btn view-btn">View Details</button>
          </div>
        </div>
        <div class="project-card">
          <h3>Container Platform</h3>
          <div class="project-details">
            <span class="project-status">Status: Not Started</span>
            <span class="project-progress">0% Complete</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <div class="project-actions">
            <button class="project-btn update-btn">Update Progress</button>
            <button class="project-btn view-btn">View Details</button>
          </div>
        </div>
        <div class="project-card add-project">
          <p class="add-project-icon">+</p>
          <p class="add-project-text">Add New Project</p>
          <p class="add-project-subtext">Track a new portfolio project</p>
        </div>
      </div>
    </div>

    <!-- Learning Tab -->
    <div id="learning" class="dashboard-tab">
      <h2>Learning Tracker</h2>
      <div class="learning-grid">
        <div class="learning-card current-courses">
          <h3>Current Courses</h3>
          <div class="course-list">
            <div class="course-item">
              <div class="course-header">
                <span class="course-name">Adrian Cantrill's AWS SAA</span>
                <span class="course-progress">10% Complete</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 10%;"></div>
              </div>
            </div>
            <div class="course-item">
              <div class="course-header">
                <span class="course-name">How Linux Works</span>
                <span class="course-progress">15% Complete</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 15%;"></div>
              </div>
            </div>
            <div class="course-item">
              <div class="course-header">
                <span class="course-name">The Linux Command Line</span>
                <span class="course-progress">5% Complete</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 5%;"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="learning-card learning-hours">
          <h3>Learning Hours Log</h3>
          <div class="hours-stats">
            <div class="hour-stat">
              <span class="hour-label">This Week:</span>
              <span class="hour-value">0/25 hours</span>
            </div>
            <div class="hour-stat">
              <span class="hour-label">Last Week:</span>
              <span class="hour-value">0 hours</span>
            </div>
            <div class="hour-stat">
              <span class="hour-label">Total:</span>
              <span class="hour-value">0 hours</span>
            </div>
          </div>
          <button class="log-hours-btn">Log Learning Hours</button>
        </div>
        
        <div class="learning-card completed-resources">
          <h3>Completed Resources</h3>
          <p class="no-resources">No completed resources yet</p>
        </div>
        
        <div class="learning-card resource-queue">
          <h3>Resource Queue</h3>
          <table class="resource-table">
            <thead>
              <tr>
                <th>Resource</th>
                <th>Type</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Terraform: Up & Running</td>
                <td>Book</td>
                <td>P1</td>
                <td>Scheduled Month 2</td>
              </tr>
              <tr>
                <td>Computer Networking: A Top-Down Approach</td>
                <td>Book</td>
                <td>P2</td>
                <td>Scheduled Month 2</td>
              </tr>
              <tr>
                <td>The Phoenix Project</td>
                <td>Book</td>
                <td>P2</td>
                <td>Scheduled Month 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Certifications Tab -->
    <div id="certs" class="dashboard-tab">
      <h2>Certification Timeline</h2>
      <div class="cert-timeline">
        <div class="timeline-cert">
          <div class="cert-badge">AWS Solutions Architect Associate</div>
          <div class="cert-timeframe">Q3-Q4 2025</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 10%;"></div>
          </div>
          <p>Progress updates and study notes will be shared as I prepare.</p>
        </div>

        <div class="timeline-cert">
          <div class="cert-badge">HashiCorp Terraform Associate</div>
          <div class="cert-timeframe">Q4 2025</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <p>Implementation projects and preparation resources will be published.</p>
        </div>

        <div class="timeline-cert">
          <div class="cert-badge">Kubernetes Administrator (CKA)</div>
          <div class="cert-timeframe">Q1 2026</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <p>Hands-on Kubernetes projects and study materials.</p>
        </div>

        <div class="timeline-cert">
          <div class="cert-badge">AWS DevOps Professional</div>
          <div class="cert-timeframe">Q3 2026</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <p>Advanced AWS implementation projects and documentation.</p>
        </div>

        <div class="timeline-cert">
          <div class="cert-badge">AWS Security Specialty</div>
          <div class="cert-timeframe">Q4 2026</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <p>Security-focused infrastructure projects and preparation notes.</p>
        </div>

        <div class="timeline-cert">
          <div class="cert-badge">Kubernetes Security Specialist (CKS)</div>
          <div class="cert-timeframe">Q1 2027</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%;"></div>
          </div>
          <p>Kubernetes security implementations and preparation resources.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="{{ "/assets/js/dashboard.js" | relative_url }}"></script>