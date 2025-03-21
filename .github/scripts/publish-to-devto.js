// .github/scripts/publish-to-devto.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const frontMatter = require('front-matter');

const DEVTO_API_URL = 'https://dev.to/api/articles';
const DEVTO_API_KEY = process.env.DEVTO_API_KEY;

// Get the list of changed files from the previous step
const changedFiles = process.env.CHANGED_FILES ? process.env.CHANGED_FILES.split(' ') : [];

async function publishArticle(filePath) {
  try {
    console.log(`Processing file: ${filePath}`);
    
    // Read the markdown file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse front matter
    const { attributes, body } = frontMatter(fileContent);
    
    // Skip if the article is marked as draft
    if (attributes.draft === true) {
      console.log(`Skipping draft: ${filePath}`);
      return;
    }
    
    // Required fields for Dev.to API
    const articleData = {
      article: {
        title: attributes.title,
        body_markdown: body,
        published: attributes.published !== false, // Default to published
        tags: attributes.tags || [],
        canonical_url: attributes.canonical_url || null,
        series: attributes.series || null,
        main_image: attributes.cover_image || null,
        description: attributes.description || ''
      }
    };
    
    // Check if the article already exists on Dev.to (by searching for its front matter id)
    let existingArticleId = null;
    
    if (attributes.devto_id) {
      existingArticleId = attributes.devto_id;
      console.log(`Updating existing article ID: ${existingArticleId}`);
    }
    
    // Make API request (create or update)
    let response;
    if (existingArticleId) {
      // Update existing article
      response = await axios.put(
        `${DEVTO_API_URL}/${existingArticleId}`,
        articleData,
        { headers: { 'api-key': DEVTO_API_KEY } }
      );
      console.log(`Updated article: ${response.data.title} (ID: ${response.data.id})`);
    } else {
      // Create new article
      response = await axios.post(
        DEVTO_API_URL,
        articleData,
        { headers: { 'api-key': DEVTO_API_KEY } }
      );
      console.log(`Published new article: ${response.data.title} (ID: ${response.data.id})`);
      
      // Update the markdown file with the Dev.to ID for future updates
      const updatedFrontMatter = {
        ...attributes,
        devto_id: response.data.id
      };
      
      const updatedContent = `---\n${yaml.stringify(updatedFrontMatter)}---\n\n${body}`;
      fs.writeFileSync(filePath, updatedContent);
    }
    
    return response.data;
  } catch (error) {
    console.error(`Error publishing article ${filePath}:`, error.response?.data || error.message);
  }
}

async function main() {
  // Process each changed file
  for (const file of changedFiles) {
    if (file.endsWith('.md')) {
      await publishArticle(file);
    }
  }
}

main().catch(error => {
  console.error('Error in publishing script:', error);
  process.exit(1);
});