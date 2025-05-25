// assets/js/devto-integration.js - Updated version
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://dev.to/api/articles?username=joshuamichaelhall')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('devto-articles');

      // No description text needed

      // Filter out specific articles we don't want to display
      const excludedTitles = [
        "The 6/7 Coding Challenge: How I'm Coding for 500 Days While Respecting the Sabbath"
      ];
      
      const filteredArticles = data.filter(article => 
        !excludedTitles.some(excludedTitle => 
          article.title.includes(excludedTitle) || excludedTitle.includes(article.title)
        )
      );
      
      const articles = filteredArticles.slice(0, 5); // Show top 5 articles

      if (articles.length === 0) {
        container.innerHTML = '<p>No articles available at this time.</p>';
        return;
      }

      // Article images mapping based on title keywords
      const articleImages = {
        'infrastructure as code': '/assets/images/infrastructure_as_code_article_icon.png',
        'secure aws': '/assets/images/set_secure_aws_article_icon.png',
        'aws learning environment': '/assets/images/set_secure_aws_article_icon.png',
        'devops': '/assets/images/devops_sre_article_icon.png',
        'sre': '/assets/images/devops_sre_article_icon.png',
        'career': '/assets/images/career_evolution_announcement_article_icon.png',
        'terminal': '/assets/images/devops_sre_article_icon.png',
        'development environment': '/assets/images/devops_sre_article_icon.png',
        // Fallback patterns
        'financial services': '/assets/images/infrastructure_as_code_article_icon.png',
        'terraform': '/assets/images/infrastructure_as_code_article_icon.png',
        'aws': '/assets/images/set_secure_aws_article_icon.png'
      };

      // Function to get article image based on title
      function getArticleImage(articleTitle) {
        const lowerTitle = articleTitle.toLowerCase();
        
        // Try to find a matching pattern
        for (const [pattern, imagePath] of Object.entries(articleImages)) {
          if (lowerTitle.includes(pattern.toLowerCase())) {
            return imagePath;
          }
        }
        
        // Default fallback image
        return '/assets/images/devops_sre_article_icon.png';
      }

      // Create a container for article cards
      const articlesContainer = document.createElement('div');
      articlesContainer.className = 'articles-container';
      
      articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'project-card'; // Use project-card for consistent styling with images
        
        const articleImage = getArticleImage(article.title);
        
        articleDiv.innerHTML = `
          <div class="project-content">
            <div class="project-image">
              <img src="${articleImage}" alt="${article.title}" loading="lazy">
            </div>
            <div class="project-details">
              <div class="project-header">
                <h3>${article.title}</h3>
                <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="btn primary-btn">Read Article</a>
              </div>
              <p class="project-description">${article.description}</p>
              <p class="article-date">Published: ${new Date(article.published_at).toLocaleDateString()}</p>
            </div>
          </div>
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