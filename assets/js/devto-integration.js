// assets/js/devto-integration.js
document.addEventListener('DOMContentLoaded', function() {
fetch('https://dev.to/api/articles?username=joshuamichaelhall')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('devto-articles');
      const articles = data.slice(0, 5); // Show top 5 articles
      
      articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article-card';
        articleDiv.innerHTML = `
          <h3><a href="${article.url}">${article.title}</a></h3>
          <p>${article.description}</p>
          <p>Published: ${new Date(article.published_at).toLocaleDateString()}</p>
        `;
        container.appendChild(articleDiv);
      });
    })
    .catch(error => console.error('Error fetching Dev.to articles:', error));
});
