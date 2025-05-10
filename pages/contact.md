---
layout: page
title: Contact
permalink: /contact/
---

# Let's Connect

<div class="content-section with-divider">
  <div class="availability-status">
    <span class="status-indicator available"></span>
    <p><strong>Status:</strong> Open to mid-level DevOps/SRE opportunities, especially in financial services.</p>
  </div>

  <p>I'm currently seeking DevOps/SRE opportunities in the financial services sector where I can leverage my infrastructure automation and containerization expertise. I'm also open to collaboration on technical content, open-source projects, and knowledge sharing.</p>

  <p>Currently focusing on completing my DevOps/SRE portfolio projects and certifications, with availability for new roles beginning in late-2025.</p>
</div>

<div class="content-section with-divider">
  <h2>Professional Interests</h2>

  <p>I'm open to discussing the following areas where I'm actively building expertise:</p>

  <ul class="interests-list">
    <li>Mid-level DevOps/SRE opportunities in financial services</li>
    <li>Remote collaboration on infrastructure projects</li>
    <li>Technical content creation on DevOps topics</li>
    <li>Knowledge sharing on terminal-based development workflows</li>
    <li>Infrastructure as Code implementation</li>
    <li>Kubernetes and containerization strategies</li>
    <li>Security and compliance automation for financial services</li>
  </ul>
</div>

<div class="content-section with-divider">
  <h2>Professional Services</h2>

  <div class="services-tabs">
    <div class="tab-headers">
      <button class="tab-button active" data-tab="coaching">Career Coaching</button>
      <button class="tab-button" data-tab="web">Web Development</button>
      <button class="tab-button" data-tab="infra">Infrastructure</button>
    </div>

    <div class="tab-content active" id="coaching-tab">
      <div class="services-box">
        <h3>Career Coaching for Technical Professionals</h3>
        <p>I offer personalized career coaching for technologists looking to advance in DevOps, SRE, and cloud engineering roles. My coaching focuses on practical skill development, certification planning, and career positioning strategies specifically for infrastructure and platform engineering careers.</p>

        <h4>Coaching Areas:</h4>
        <ul class="coaching-areas">
          <li><strong>Technical Roadmapping</strong> - Customized learning paths for DevOps/cloud careers</li>
          <li><strong>Certification Planning</strong> - Strategic certification approaches for career advancement</li>
          <li><strong>Portfolio Development</strong> - Guidance on building meaningful technical projects</li>
          <li><strong>Technical Interview Preparation</strong> - Infrastructure and systems design practice</li>
        </ul>
      </div>
    </div>

    <div class="tab-content" id="web-tab">
      <div class="services-box">
        <h3>Web Development Services</h3>
        <p>I build professional websites for technical professionals and small businesses with a focus on performance, clean design, and modern development practices. My web development approach emphasizes security, maintainability, and technical excellence.</p>

        <h4>Development Services:</h4>
        <ul class="service-areas">
          <li><strong>Professional Portfolio Sites</strong> - Custom-built portfolio websites for technical professionals</li>
          <li><strong>Static Site Generation</strong> - Fast, secure websites using Jekyll, Hugo, or similar technologies</li>
          <li><strong>Technical Content Platforms</strong> - Specialized sites for presenting technical content</li>
          <li><strong>Developer Blogs</strong> - Customized blogging platforms for technical writers</li>
        </ul>
      </div>
    </div>

    <div class="tab-content" id="infra-tab">
      <div class="services-box">
        <h3>Infrastructure & Hosting Services</h3>
        <p>I provide secure, reliable hosting and infrastructure services specifically designed for technical professionals who need specialized configurations or enhanced security. My infrastructure services focus on applying DevOps best practices to small business needs.</p>

        <h4>Infrastructure Services:</h4>
        <ul class="service-areas">
          <li><strong>Secure Email Hosting</strong> - Private email services with enhanced security controls</li>
          <li><strong>Static Site Hosting</strong> - Fast, reliable hosting with CI/CD integration</li>
          <li><strong>Development Environment Setup</strong> - Containerized development environments</li>
          <li><strong>Infrastructure Automation</strong> - Small-scale infrastructure as code implementations</li>
        </ul>
      </div>
    </div>

    <p class="services-cta">Interested in my professional services? <a href="#contact-form">Contact me</a> to discuss your specific needs.</p>
  </div>
</div>

<div class="content-section with-divider">
  <h2>Connect With Me</h2>

  <ul class="contact-info">
    <li><strong>Email</strong>: <a href="mailto:contact@joshuamichaelhall.com">contact@joshuamichaelhall.com</a></li>
    <li><strong>LinkedIn</strong>: <a href="https://linkedin.com/in/joshuamichaelhall">joshuamichaelhall</a></li>
    <li><strong>GitHub Personal</strong>: <a href="https://github.com/JoshuaMichaelHall">JoshuaMichaelHall</a></li>
    <li><strong>GitHub Organization</strong>: <a href="https://github.com/JoshuaMichaelHall-Tech">JoshuaMichaelHall-Tech</a></li>
    <li><strong>Dev.to</strong>: <a href="https://dev.to/joshuamichaelhall">joshuamichaelhall</a></li>
    <li><strong>Medium</strong>: <a href="https://medium.com/@michael.joshua.hall">@michael.joshua.hall</a></li>
    <li><strong>X</strong>: <a href="https://x.com/JoshuaHallTech">@JoshuaHallTech</a></li>
  </ul>
</div>

<div class="content-section no-divider">
  <h2>Send a Message</h2>

  <div class="contact-form-container" id="contact-form">
    <form action="https://formspree.io/f/mvgaqjak" method="POST" class="contact-form" id="contactForm" onsubmit="return validateForm(event)">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Your name" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="_replyto" id="email" placeholder="your.email@example.com" required>
      </div>

      <!-- This is a honeypot field to prevent spam -->
      <input type="text" name="_gotcha" style="display:none">

      <!-- Redirect after submission -->
      <input type="hidden" name="_next" value="https://joshuamichaelhall.github.io/thanks.html">

      <!-- Error page redirect -->
      <input type="hidden" name="_error" value="https://joshuamichaelhall.github.io/form-error.html">

      <!-- Custom subject line format -->
      <input type="hidden" name="_subject" value="Website Contact: [Subject]" id="subjectLine">

      <div class="form-group full-width">
        <label for="subject">Subject</label>
        <select name="subject" id="subject" required>
          <option value="" disabled selected>Select a topic...</option>
          <optgroup label="Professional Services">
            <option value="Career Coaching">Career Coaching</option>
            <option value="Web Development">Web Development</option>
            <option value="Infrastructure Services">Infrastructure Services</option>
          </optgroup>
          <optgroup label="Career & Collaboration">
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Project Collaboration">Project Collaboration</option>
            <option value="Technical Question">Technical Question</option>
            <option value="Content Creation">Content Creation</option>
          </optgroup>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group full-width">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="5" placeholder="Your message..." required></textarea>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>

    <div id="formError" class="form-error" style="display: none;">
      <p>There was a problem submitting the form. Please try again or <a href="mailto:contact@joshuamichaelhall.com">email me directly</a>.</p>
    </div>
  </div>

  <div class="note">
    <p><strong>Note:</strong> Please allow 1-2 business days for a response to your inquiry.</p>
  </div>
</div>

<script>
  // Form validation function
  function validateForm(event) {
    try {
      // Hide error message if it was shown previously
      document.getElementById('formError').style.display = 'none';

      const form = document.getElementById('contactForm');
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      // Basic validation
      if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields.');
        return false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
      }

      // Set a cookie to track submission attempt
      document.cookie = "formSubmitAttempt=true; path=/; max-age=3600";

      // Add submission event handler for AJAX submission
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            window.location.href = "/thanks.html";
          } else {
            document.getElementById('formError').style.display = 'block';
            throw new Error('Form submission failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          document.getElementById('formError').style.display = 'block';
        });
      }, { once: true });

      return false; // Prevent default form submission as we're using fetch
    } catch (error) {
      console.error("Form validation error:", error);
      document.getElementById('formError').style.display = 'block';
      return false;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Service tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to current button
        this.classList.add('active');

        // Show the corresponding tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId + '-tab').classList.add('active');
      });
    });

    // Subject line customization
    const subjectSelect = document.getElementById('subject');
    const subjectLine = document.getElementById('subjectLine');

    if(subjectSelect && subjectLine) {
      // Update the subject line when the dropdown changes
      subjectSelect.addEventListener('change', function() {
        subjectLine.value = `Website Contact: ${this.value}`;
      });
    }

    // Add Service option to dropdown if selected from URL hash
    const hash = window.location.hash;
    if(hash && hash.includes('service-')) {
      const service = hash.replace('#service-', '');

      // Select the appropriate tab
      const tabButton = document.querySelector(`.tab-button[data-tab="${service}"]`);
      if(tabButton) {
        tabButton.click();

        // Scroll to the services section
        const servicesSection = document.querySelector('.services-tabs');
        if(servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Set the subject dropdown to the appropriate service
      if(subjectSelect) {
        if(service === 'web') {
          subjectSelect.value = 'Web Development';
        } else if(service === 'infra') {
          subjectSelect.value = 'Infrastructure Services';
        } else if(service === 'coaching') {
          subjectSelect.value = 'Career Coaching';
        }

        // Trigger the change event to update the hidden subject line
        const event = new Event('change');
        subjectSelect.dispatchEvent(event);
      }
    }
  });
</script>