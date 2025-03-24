// assets/js/github-integration.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.github.com/users/JoshuaMichaelHall/repos?sort=updated')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('github-projects');
      const repos = data.slice(0, 6); // Show top 6 projects
      
      repos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.innerHTML = `
          <h3><a href="${repo.html_url}">${repo.name}</a></h3>
          <p>${repo.description || 'No description available'}</p>
          <p>Language: ${repo.language || 'Not specified'}</p>
        `;
        container.appendChild(projectDiv);
      });
    })
    .catch(error => console.error('Error fetching GitHub projects:', error));
});