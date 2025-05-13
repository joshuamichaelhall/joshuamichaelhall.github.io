// assets/js/github-integration.js - Updated version
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.github.com/users/JoshuaMichaelHall/repos?sort=updated')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('github-projects');

      // No description text needed

      // Career-relevant project names (all projects should contain these keywords to be considered career-relevant)
      const careerRelevantKeywords = [
        'infrastructure', 'terraform', 'aws', 'kubernetes', 'k8s', 'docker', 
        'container', 'devops', 'cicd', 'ci-cd', 'pipeline', 'security', 'compliance',
        'monitoring', 'platform', 'finapp', 'cloud', 'automation'
      ];
      
      // Filter for career-relevant repositories and limit to 6
      const filteredRepos = data
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
        })
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
        'monitoring-dashboard': 'Comprehensive monitoring solution for infrastructure and applications with financial services focus.'
      };
      
      // Default languages for repositories that might not have a language specified
      const defaultLanguages = {
        'finapp-infrastructure': 'Terraform',
        'container-platform': 'Docker',
        'security-automation': 'Python',
        'cicd-pipeline': 'YAML',
        'fin-k8s-operator': 'Go',
        'monitoring-dashboard': 'Terraform'
      };
      
      filteredRepos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';

        // Use default description if none is available
        const description = repo.description || defaultDescriptions[repo.name] || 'DevOps/SRE project focused on infrastructure automation, containerization, and security for financial services.';

        // Use default language if none is specified
        const language = repo.language || defaultLanguages[repo.name] || 'YAML';

        projectDiv.innerHTML = `
          <h3><a href="${repo.html_url}">${repo.name}</a></h3>
          <p>${description}</p>
          <p>Language: ${language}</p>
          <a href="${repo.html_url}" class="btn project-btn">View on GitHub</a>
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