// assets/js/github-integration.js - Updated version
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.github.com/users/JoshuaMichaelHall/repos?sort=updated')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('github-projects');
      
      // Filter out unwanted repositories and limit to 6
      const filteredRepos = data
        .filter(repo => repo.name !== '.github' && repo.name !== 'joshuamichaelhall.github.io') // Filter out .github and personal site repos
        .slice(0, 6);
      
      if (filteredRepos.length === 0) {
        container.innerHTML = '<p>No projects available at this time.</p>';
        return;
      }
      
      container.innerHTML = ''; // Clear only the projects container
      
      // Default descriptions for specific repositories if they're missing
      const defaultDescriptions = {
        'anki-converter': 'Command-line tool that converts Markdown notes to CSV files for efficient Anki flashcard creation.',
        'articles': 'Collection of technical articles on DevOps, infrastructure automation, and cloud architecture.',
        'JoshuaMichaelHall': 'Configuration and profile customization for my GitHub account with DevOps focus.'
      };
      
      // Default languages for repositories that might not have a language specified
      const defaultLanguages = {
        'articles': 'Markdown',
        'JoshuaMichaelHall': 'Markdown'
      };
      
      filteredRepos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        
        // Use default description if none is available
        const description = repo.description || defaultDescriptions[repo.name] || 'DevOps/SRE project in development.';
        
        // Use default language if none is specified
        const language = repo.language || defaultLanguages[repo.name] || 'Not specified';
        
        projectDiv.innerHTML = `
          <h3><a href="${repo.html_url}">${repo.name}</a></h3>
          <p>${description}</p>
          <p>Language: ${language}</p>
          <a href="${repo.html_url}" class="btn project-btn">View on GitHub</a>
        `;
        container.appendChild(projectDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching GitHub projects:', error);
      document.getElementById('github-projects').innerHTML = '<p>Unable to load GitHub projects. Please check back later.</p>';
    });
});