// DevOps Career Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Dashboard
  initDashboard();
  
  // Listen for theme changes and update dashboard accordingly
  observeThemeChanges();
});

/**
 * Initialize the dashboard functionality
 */
function initDashboard() {
  // Tab switching
  initTabs();
  
  // Goal checkboxes
  initGoalCheckboxes();
  
  // Simulated click handlers for buttons
  initButtonHandlers();
  
  // Load dashboard data (if available)
  loadDashboardData();
}

/**
 * Initialize tab switching functionality
 */
function initTabs() {
  const tabs = document.querySelectorAll('.dashboard-tabs li');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Hide all tab content
      const tabContents = document.querySelectorAll('.dashboard-tab');
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Show selected tab content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

/**
 * Initialize goal checkbox functionality
 */
function initGoalCheckboxes() {
  const checkboxes = document.querySelectorAll('.goal-checkbox');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  });
}

/**
 * Initialize button handlers (for demonstration)
 */
function initButtonHandlers() {
  // Update Project buttons
  const updateButtons = document.querySelectorAll('.update-btn');
  updateButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('This would open a modal to update project progress.');
    });
  });
  
  // View Project buttons
  const viewButtons = document.querySelectorAll('.view-btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('This would navigate to the project details page.');
    });
  });
  
  // Add Project card
  const addProjectCard = document.querySelector('.add-project');
  if (addProjectCard) {
    addProjectCard.addEventListener('click', function() {
      alert('This would open a modal to add a new project.');
    });
  }
  
  // Log Hours button
  const logHoursButton = document.querySelector('.log-hours-btn');
  if (logHoursButton) {
    logHoursButton.addEventListener('click', function() {
      alert('This would open a modal to log learning hours.');
    });
  }
}

/**
 * Load dashboard data from API or JSON file (if available)
 */
function loadDashboardData() {
  // Fetch the dashboard data from JSON file
  fetch('/assets/data/dashboard-data.json')
    .then(response => response.json())
    .then(data => {
      updateDashboardWithData(data);
    })
    .catch(error => {
      console.error('Error loading dashboard data:', error);
      // If there's an error, we'll continue using the hard-coded data in the HTML
    });
}

/**
 * Update dashboard with data
 */
function updateDashboardWithData(data) {
  // Update current phase from overview
  if (data.overview && data.overview.currentPhase) {
    document.querySelector('.current-phase').textContent = 
      `Current Phase: ${data.overview.currentPhase}`;
  }
  
  // Update phase progress
  if (data.careerPhases) {
    data.careerPhases.forEach((phase, index) => {
      const phaseElement = document.querySelectorAll('.progress-phases .phase')[index];
      if (phaseElement) {
        phaseElement.querySelector('.progress-fill').style.width = `${phase.progress}%`;
      }
    });
  }
  
  // Update weekly metrics
  if (data.weeklyMetrics) {
    const metrics = document.querySelectorAll('.metric-item .metric-value');
    
    if (metrics[0]) metrics[0].textContent = data.weeklyMetrics.learningHours || '0';
    if (metrics[1]) metrics[1].textContent = data.weeklyMetrics.projectHours || '0'; 
    if (metrics[2]) metrics[2].textContent = data.weeklyMetrics.networkingHours || '0';
    if (metrics[3]) metrics[3].textContent = data.weeklyMetrics.newConnections || '0';
  }
  
  // Update upcoming goals
  if (data.upcomingGoals) {
    const goalsList = document.querySelector('.goals-list');
    if (goalsList) {
      // Clear existing goals
      goalsList.innerHTML = '';
      
      // Add goals from data
      data.upcomingGoals.forEach(goal => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('div');
        checkbox.className = 'goal-checkbox';
        if (goal.status === 'completed') {
          checkbox.classList.add('checked');
        }
        
        const span = document.createElement('span');
        span.className = 'goal-text';
        span.textContent = goal.content;
        
        li.appendChild(checkbox);
        li.appendChild(span);
        goalsList.appendChild(li);
        
        // Add click handler to checkbox
        checkbox.addEventListener('click', function() {
          this.classList.toggle('checked');
        });
      });
    }
  }
  
  // Update certification progress
  if (data.upcomingCertifications) {
    const certsList = document.querySelector('.cert-list');
    if (certsList) {
      // Only update the first two certifications in the overview tab
      for (let i = 0; i < 2 && i < data.upcomingCertifications.length; i++) {
        const cert = data.upcomingCertifications[i];
        const certElement = document.querySelectorAll('.cert-item')[i];
        
        if (certElement) {
          const nameElement = certElement.querySelector('.cert-name');
          const statusElement = certElement.querySelector('.cert-status');
          const progressElement = certElement.querySelector('.progress-fill');
          const timelineElement = certElement.querySelector('.cert-timeline');
          
          if (nameElement) nameElement.textContent = cert.name;
          
          if (statusElement) {
            statusElement.textContent = cert.status;
            statusElement.className = 'cert-status';
            if (cert.status === 'In Progress') {
              statusElement.classList.add('in-progress');
            } else if (cert.status === 'Completed') {
              statusElement.classList.add('completed');
            } else {
              statusElement.classList.add('planned');
            }
          }
          
          if (progressElement) progressElement.style.width = `${cert.progress}%`;
          if (timelineElement) timelineElement.textContent = `Target: ${cert.targetDate}`;
        }
      }
    }
    
    // Update the certifications tab if it exists
    const certTimeline = document.querySelector('#certs .cert-timeline');
    if (certTimeline) {
      // Clear existing certifications
      certTimeline.innerHTML = '';
      
      // Add certifications from data
      data.upcomingCertifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.className = 'timeline-cert';
        
        const badge = document.createElement('div');
        badge.className = 'cert-badge';
        badge.textContent = cert.name;
        
        const timeframe = document.createElement('div');
        timeframe.className = 'cert-timeframe';
        timeframe.textContent = cert.targetDate;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressFill.style.width = `${cert.progress}%`;
        
        const description = document.createElement('p');
        if (cert.status === 'In Progress') {
          description.textContent = 'Currently studying for this certification.';
        } else if (cert.status === 'Completed') {
          description.textContent = 'Successfully completed this certification.';
        } else {
          description.textContent = 'Planned for future study.';
        }
        
        progressBar.appendChild(progressFill);
        certDiv.appendChild(badge);
        certDiv.appendChild(timeframe);
        certDiv.appendChild(progressBar);
        certDiv.appendChild(description);
        
        certTimeline.appendChild(certDiv);
      });
    }
  }
  
  // Update skills tab
  if (data.skills && document.getElementById('skills')) {
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
      // Clear existing skills
      skillsGrid.innerHTML = '';
      
      // Add skills from data
      data.skills.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const heading = document.createElement('h3');
        heading.textContent = category.category;
        
        const proficiency = document.createElement('p');
        proficiency.className = 'skill-proficiency';
        proficiency.textContent = `Proficiency: ${category.proficiency}`;
        
        categoryDiv.appendChild(heading);
        categoryDiv.appendChild(proficiency);
        
        if (category.skills && category.skills.length > 0) {
          const skillsList = document.createElement('ul');
          skillsList.className = 'skills-list';
          
          category.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
          });
          
          categoryDiv.appendChild(skillsList);
        } else {
          const noSkills = document.createElement('p');
          noSkills.className = 'no-skills';
          noSkills.textContent = 'No skills recorded yet';
          categoryDiv.appendChild(noSkills);
        }
        
        skillsGrid.appendChild(categoryDiv);
      });
    }
  }
  
  // Update projects tab
  if (data.currentProjects && document.getElementById('projects')) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      // Clear existing projects, but keep the add project card
      const addProjectCard = projectsGrid.querySelector('.add-project');
      projectsGrid.innerHTML = '';
      
      // Add projects from data
      data.currentProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const heading = document.createElement('h3');
        heading.textContent = project.name;
        
        const details = document.createElement('div');
        details.className = 'project-details';
        
        const status = document.createElement('span');
        status.className = 'project-status';
        status.textContent = `Status: ${project.status}`;
        
        const progress = document.createElement('span');
        progress.className = 'project-progress';
        progress.textContent = `${project.progress}% Complete`;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressFill.style.width = `${project.progress}%`;
        
        const actions = document.createElement('div');
        actions.className = 'project-actions';
        
        const updateBtn = document.createElement('button');
        updateBtn.className = 'project-btn update-btn';
        updateBtn.textContent = 'Update Progress';
        updateBtn.addEventListener('click', function() {
          alert('This would open a modal to update project progress.');
        });
        
        const viewBtn = document.createElement('button');
        viewBtn.className = 'project-btn view-btn';
        viewBtn.textContent = 'View Details';
        viewBtn.addEventListener('click', function() {
          alert('This would navigate to the project details page.');
        });
        
        details.appendChild(status);
        details.appendChild(progress);
        progressBar.appendChild(progressFill);
        actions.appendChild(updateBtn);
        actions.appendChild(viewBtn);
        
        projectCard.appendChild(heading);
        projectCard.appendChild(details);
        projectCard.appendChild(progressBar);
        projectCard.appendChild(actions);
        
        projectsGrid.appendChild(projectCard);
      });
      
      // Add back the add project card
      if (addProjectCard) {
        projectsGrid.appendChild(addProjectCard);
      } else {
        // Create a new add project card if it doesn't exist
        const newAddProject = document.createElement('div');
        newAddProject.className = 'project-card add-project';
        
        const addIcon = document.createElement('p');
        addIcon.className = 'add-project-icon';
        addIcon.textContent = '+';
        
        const addText = document.createElement('p');
        addText.className = 'add-project-text';
        addText.textContent = 'Add New Project';
        
        const addSubtext = document.createElement('p');
        addSubtext.className = 'add-project-subtext';
        addSubtext.textContent = 'Track a new portfolio project';
        
        newAddProject.appendChild(addIcon);
        newAddProject.appendChild(addText);
        newAddProject.appendChild(addSubtext);
        
        newAddProject.addEventListener('click', function() {
          alert('This would open a modal to add a new project.');
        });
        
        projectsGrid.appendChild(newAddProject);
      }
    }
  }
  
  // Update learning tab
  if (data.currentCourses && data.learningHours && document.getElementById('learning')) {
    // Update current courses
    const courseList = document.querySelector('.course-list');
    if (courseList) {
      // Clear existing courses
      courseList.innerHTML = '';
      
      // Add courses from data
      data.currentCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        
        const courseHeader = document.createElement('div');
        courseHeader.className = 'course-header';
        
        const courseName = document.createElement('span');
        courseName.className = 'course-name';
        courseName.textContent = course.name;
        
        const courseProgress = document.createElement('span');
        courseProgress.className = 'course-progress';
        courseProgress.textContent = `${course.progress}% Complete`;
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'progress-fill';
        progressFill.style.width = `${course.progress}%`;
        
        courseHeader.appendChild(courseName);
        courseHeader.appendChild(courseProgress);
        progressBar.appendChild(progressFill);
        courseItem.appendChild(courseHeader);
        courseItem.appendChild(progressBar);
        
        courseList.appendChild(courseItem);
      });
    }
    
    // Update learning hours
    const hoursStats = document.querySelector('.hours-stats');
    if (hoursStats) {
      const hourValues = hoursStats.querySelectorAll('.hour-value');
      
      if (hourValues[0]) hourValues[0].textContent = `${data.learningHours.thisWeek}/25 hours`;
      if (hourValues[1]) hourValues[1].textContent = `${data.learningHours.lastWeek} hours`;
      if (hourValues[2]) hourValues[2].textContent = `${data.learningHours.total} hours`;
    }
    
    // Update resource queue
    const resourceTable = document.querySelector('.resource-table tbody');
    if (resourceTable && data.resourceQueue) {
      // Clear existing resources
      resourceTable.innerHTML = '';
      
      // Add resources from data
      data.resourceQueue.forEach(resource => {
        const tr = document.createElement('tr');
        
        const tdName = document.createElement('td');
        tdName.textContent = resource.name;
        
        const tdType = document.createElement('td');
        tdType.textContent = resource.type;
        
        const tdPriority = document.createElement('td');
        tdPriority.textContent = resource.priority;
        
        const tdStatus = document.createElement('td');
        tdStatus.textContent = resource.status;
        
        tr.appendChild(tdName);
        tr.appendChild(tdType);
        tr.appendChild(tdPriority);
        tr.appendChild(tdStatus);
        
        resourceTable.appendChild(tr);
      });
    }
  }
}

/**
 * Observe theme changes in the main site and update dashboard accordingly
 */
function observeThemeChanges() {
  // Check for initial theme
  const isDarkTheme = document.body.classList.contains('dark-theme');
  
  // Set up an observer to watch for theme changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'class') {
        const isDark = document.body.classList.contains('dark-theme');
        // Update any theme-specific elements
        updateThemeSpecificElements(isDark);
      }
    });
  });
  
  // Start observing the body for class changes
  observer.observe(document.body, { attributes: true });
  
  // Initial theme setup
  updateThemeSpecificElements(isDarkTheme);
}

/**
 * Update any theme-specific elements based on current theme
 * @param {boolean} isDark - Whether dark theme is active
 */
function updateThemeSpecificElements(isDark) {
  // The dashboard uses CSS variables defined in dashboard.css
  // These are automatically updated when the dark-theme class is applied to the body
  // This function could be used for any additional JavaScript-based theme changes
  
  // For example, we could update tab icons or other elements
  const dashboardContainer = document.querySelector('.dashboard-container');
  if (dashboardContainer) {
    if (isDark) {
      console.log('Dashboard switched to dark theme');
    } else {
      console.log('Dashboard switched to light theme');
    }
  }
}