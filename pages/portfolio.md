---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Technical Portfolio

This portfolio showcases my software engineering projects, focusing on backend development, data processing, and terminal-based workflows. Each project demonstrates my commitment to mastery-based learning and building strong technical foundations.

## Featured Projects

{% assign featured_projects = site.data.projects | where: "featured", true %}
<div class="featured-projects">
  {% for project in featured_projects %}
  <div class="project-card featured">
    <h2>{{ project.title }}</h2>
    <div class="project-details">
      <div class="project-image">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" />
      </div>
      <div class="project-description">
        <p>{{ project.description }}</p>
        <p class="technologies">
          <strong>Technologies:</strong> {{ project.technologies | join: ", " }}
        </p>
        <div class="project-links">
          {% if project.github %}
          <a href="{{ project.github }}" class="github-link" target="_blank">View on GitHub</a>
          {% endif %}
          {% if project.demo %}
          <a href="{{ project.demo }}" class="demo-link" target="_blank">Live Demo</a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

## All Projects

<div class="project-filter">
  <button class="filter-btn active" data-category="all">All</button>
  <button class="filter-btn" data-category="backend">Backend</button>
  <button class="filter-btn" data-category="data-science">Data Science</button>
  <button class="filter-btn" data-category="development-tools">Development Tools</button>
</div>

<div class="projects-grid">
  {% for project in site.data.projects %}
  <div class="project-card" data-category="{{ project.category }}">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p class="technologies">
      <strong>Technologies:</strong> {{ project.technologies | join: ", " }}
    </p>
    <div class="project-links">
      {% if project.github %}
      <a href="{{ project.github }}" target="_blank">GitHub</a>
      {% endif %}
      {% if project.demo %}
      <a href="{{ project.demo }}" target="_blank">Demo</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
</script>
