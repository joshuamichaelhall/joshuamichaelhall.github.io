// assets/js/github-integration.js - Updated version
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.github.com/users/JoshuaMichaelHall-Tech/repos?sort=updated')
    .then(response => response.json())
    .then(async data => {
      const container = document.getElementById('github-projects');

      // No description text needed

      // Career-relevant project names (all projects should contain these keywords to be considered career-relevant)
      const careerRelevantKeywords = [
        'infrastructure', 'terraform', 'aws', 'kubernetes', 'k8s', 'docker', 
        'container', 'devops', 'cicd', 'ci-cd', 'pipeline', 'security', 'compliance',
        'monitoring', 'platform', 'finapp', 'cloud', 'automation', 'terminal', 'enhanced-terminal'
      ];
      
      // Filter for career-relevant repositories
      const careerRelevantRepos = data
        .filter(repo => {
          // Always exclude these repos
          if (repo.name === '.github' || repo.name === 'joshuamichaelhall.github.io') {
            return false;
          }
          
          // Check if repo name or description contains career-relevant keywords
          const repoNameLower = repo.name.toLowerCase();
          const repoDescLower = repo.description ? repo.description.toLowerCase() : '';
          
          return careerRelevantKeywords.some(keyword => 
            repoNameLower.includes(keyword) || repoDescLower.includes(keyword)
          );
        });

      // Check README files to filter out in-progress projects
      const readmeChecks = await Promise.all(
        careerRelevantRepos.map(async repo => {
          try {
            const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`);
            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              const readmeContent = atob(readmeData.content);
              const firstLine = readmeContent.split('\n')[0].toLowerCase();
              
              // Include only if first line doesn't contain progress markers
              const isComplete = !firstLine.includes('(in progress)') && 
                                !firstLine.includes('(in development)') &&
                                !firstLine.includes('(wip)');
              
              return { repo, isComplete };
            }
            return { repo, isComplete: true }; // Include if we can't read README
          } catch (error) {
            return { repo, isComplete: true }; // Include if there's an error reading README
          }
        })
      );

      // Filter to only completed projects and limit to 6
      const filteredRepos = readmeChecks
        .filter(({ isComplete }) => isComplete)
        .map(({ repo }) => repo)
        .slice(0, 6);

      if (filteredRepos.length === 0) {
        container.innerHTML = '<p>No projects available at this time.</p>';
        return;
      }

      // Create a container for project cards
      const projectsContainer = document.createElement('div');
      projectsContainer.className = 'projects-container';
      
      // Default descriptions for specific repositories if they're missing
      const defaultDescriptions = {
        'finapp-infrastructure': 'Production-grade infrastructure modules for financial services environments with security controls and compliance documentation.',
        'container-platform': 'Containerized application platform with Kubernetes deployment manifests and security implementation for financial services.',
        'security-automation': 'Infrastructure security scanning automation and compliance reporting tools for financial regulations.',
        'cicd-pipeline': 'Complete CI/CD pipeline for application deployment with testing, security scanning and automated rollbacks.',
        'fin-k8s-operator': 'Custom Kubernetes operator for managing financial application deployments with compliance controls.',
        'enhanced-terminal-environment': 'Customized developer terminal environment with integrated tooling for zsh, tmux, and neovim focused on DevOps workflow optimization.'
      };
      
      // Default languages for repositories that might not have a language specified
      const defaultLanguages = {
        'finapp-infrastructure': 'Terraform',
        'container-platform': 'Docker',
        'security-automation': 'Python',
        'cicd-pipeline': 'YAML',
        'fin-k8s-operator': 'Go',
        'enhanced-terminal-environment': 'Shell'
      };
      
      // Project images mapping based on repository names
      const projectImages = {
        'project-aws-infrastructure': '/assets/images/Financial Services AWS Infrastructure.png',
        'project-container-platform': '/assets/images/Containerized Microservices Platform.png',
        'project-container-security-finance': '/assets/images/security-automation.png',
        'project-devops-pipeline-financial': '/assets/images/cicd-pipeline.png',
        'enhanced-terminal-environment': '/assets/images/enhanced_terminal_environment.png',
        'devops-sre-mastery': '/assets/images/devops_sre_mastery_project.png',
        'software-engineering-reference': '/assets/images/software_engineering_reference.png',
        'ruby-pomodoro-cli': '/assets/images/ruby_pomodoro_cli_icon.png',
        // Fallback patterns for partial matches
        'infrastructure': '/assets/images/terraform-aws.png',
        'container': '/assets/images/kubernetes.png',
        'security': '/assets/images/security-automation.png',
        'pipeline': '/assets/images/cicd-pipeline.png',
        'terminal': '/assets/images/enhanced_terminal_environment.png',
        'ruby': '/assets/images/ruby_pomodoro_cli_icon.png',
        'pomodoro': '/assets/images/ruby_pomodoro_cli_icon.png'
      };
      
      filteredRepos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';

        // Use default description if none is available
        const description = repo.description || defaultDescriptions[repo.name] || 'DevOps/SRE project focused on infrastructure automation, containerization, and security for financial services.';

        // Use default language if none is specified
        const language = repo.language || defaultLanguages[repo.name] || 'YAML';

        // Get project image
        function getProjectImage(repoName) {
          // First try exact match
          if (projectImages[repoName]) {
            return projectImages[repoName];
          }
          
          // Then try pattern matching
          const lowerName = repoName.toLowerCase();
          for (const [pattern, imagePath] of Object.entries(projectImages)) {
            if (lowerName.includes(pattern.toLowerCase())) {
              return imagePath;
            }
          }
          
          // Default fallback image
          return '/assets/images/terraform-aws.png';
        }

        const projectImage = getProjectImage(repo.name);

        projectDiv.innerHTML = `
          <div class="project-content">
            <div class="project-image">
              <img src="${projectImage}" alt="${repo.name}" loading="lazy">
            </div>
            <div class="project-details">
              <div class="project-header">
                <h3><a href="${repo.html_url}">${repo.name}</a></h3>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn project-btn">View on GitHub</a>
              </div>
              <p class="project-description">${description}</p>
            </div>
          </div>
        `;
        projectsContainer.appendChild(projectDiv);
      });

      // Add the projects container to the main container
      container.appendChild(projectsContainer);
    })
    .catch(error => {
      console.error('Error fetching GitHub projects:', error);
      document.getElementById('github-projects').innerHTML = '<p>Unable to load GitHub projects. Please check back later.</p>';
    });
});