---
layout: page
title: About Me
permalink: /about/
---

# About Me

I'm a software engineering student at Launch School, dedicated to mastering the fundamentals of web development and software engineering. My career vision involves progressing from a remote software engineer to a specialized AI/ML engineer in the finance sector.

## Professional Background

I'm currently focused on building a strong technical foundation through Launch School's mastery-based curriculum. My background includes:

- Software Engineering studies at Launch School with focus on Ruby backend development
- Project Management certification
- Business development experience from founding TimothyTek
- Technical content creation on Medium and Dev.to

## Technical Environment

My development workflow is centered around terminal-based tools that maximize productivity and minimize context-switching:

- **macOS** as primary operating system
- **Neovim** as primary text editor/IDE
- **tmux** for terminal multiplexing and session management
- **Command-line tools** for development, data analysis, and content creation
- **Shell scripting** for automation and workflow optimization
- **Git** for version control and documentation

## Skills

{% for category in site.data.skills.categories %}
<div class="skills-category">
  <h3>{{ category.name }}</h3>
  <div class="skills-grid">
    {% for skill in category.skills %}
    <div class="skill-item">
      <div class="skill-header">
        <h4>{{ skill.name }}</h4>
        <div class="skill-level">
          <div class="skill-bar">
            <div class="skill-progress" style="width: {{ skill.level }}%"></div>
          </div>
        </div>
      </div>
      <p class="skill-description">{{ skill.description }}</p>
    </div>
    {% endfor %}
  </div>
</div>
{% endfor %}

## Career Path

My career development plan follows this trajectory:

### Launch School Phase (Now-2026)
- Complete Ruby backend curriculum
- Learn Python for data analysis
- Master JavaScript/frontend development
- Participate in Capstone Program

### Initial Employment & OMSCS Preparation (2026-2028)
- Secure initial software engineering role ($120-150K)
- Prepare for Georgia Tech OMSCS program
- Develop specialized ML skills

### OMSCS & Career Growth (2028-2030)
- Complete ML specialization
- Transition to ML roles in finance
- Progress to senior technical positions ($350K+)

## Learning Philosophy

I believe in:

- **Mastery-based learning**: Deep understanding over surface-level knowledge
- **Fundamentals first**: Building strong technical foundations
- **Deliberate practice**: Focused effort on specific skills
- **Terminal-centric workflow**: Efficiency and customization
- **Long-term career strategy**: Strategic skill development for high-value specialization

## Connect With Me

- [GitHub](https://github.com/JoshuaHallTech)
- [LinkedIn](https://linkedin.com/in/joshuamichaelhall)
- [Dev.to](https://dev.to/joshuamichaelhall)
- [Medium](https://medium.com/@joshuamichaelhall)
