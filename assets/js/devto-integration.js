// assets/js/devto-integration.js - Updated version
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://dev.to/api/articles?username=joshuamichaelhall')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('devto-articles');

      // No description text needed

      const articles = data.slice(0, 5); // Show top 5 articles

      if (articles.length === 0) {
        container.innerHTML = '<p>No articles available at this time.</p>';
        return;
      }

      // Create a container for article cards
      const articlesContainer = document.createElement('div');
      articlesContainer.className = 'articles-container';
      
      articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'project-card'; // Change to project-card for consistent styling
        articleDiv.innerHTML = `
          <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
          <p>${article.description}</p>
          <p>Published: ${new Date(article.published_at).toLocaleDateString()}</p>
        `;
        articlesContainer.appendChild(articleDiv);
      });

      // Add the articles container to the main container
      container.appendChild(articlesContainer);
    })
    .catch(error => {
      console.error('Error fetching Dev.to articles:', error);
      document.getElementById('devto-articles').innerHTML = '<p>Unable to load Dev.to articles. Please check back later.</p>';
    });
});