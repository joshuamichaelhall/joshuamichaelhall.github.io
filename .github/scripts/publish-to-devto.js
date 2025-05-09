// .github/scripts/publish-to-devto.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const frontMatter = require('front-matter');
const yaml = require('js-yaml');

const DEVTO_API_URL = 'https://dev.to/api/articles';
const DEVTO_API_KEY = process.env.DEVTO_API_KEY;

// Check if API key is set
if (!DEVTO_API_KEY) {
  console.error('Error: DEVTO_API_KEY environment variable is not set');
  process.exit(1);
}

// Get the list of changed files from the previous step
const changedFiles = process.env.CHANGED_FILES ? process.env.CHANGED_FILES.split(' ') : [];

if (changedFiles.length === 0) {
  console.log('No changed Markdown files detected. Exiting.');
  process.exit(0);
}

console.log(`Found ${changedFiles.length} changed files to process`);

async function publishArticle(filePath) {
  try {
    console.log(`Processing file: ${filePath}`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist: ${filePath}`);
      return;
    }
    
    // Read the markdown file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log(`Successfully read file: ${filePath}`);
    
    // Parse front matter
    const { attributes, body } = frontMatter(fileContent);
    console.log(`Front matter parsed for: ${filePath}`);
    console.log(`Title: ${attributes.title}`);
    
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
    
    console.log(`Preparing to publish article: ${attributes.title}`);
    
    // Check if the article already exists on Dev.to (by searching for its front matter id)
    let existingArticleId = null;
    
    if (attributes.devto_id) {
      existingArticleId = attributes.devto_id;
      console.log(`Found existing article ID: ${existingArticleId}`);
    }
    
    // Make API request (create or update)
    let response;
    try {
      if (existingArticleId) {
        // Update existing article
        console.log(`Updating existing article ID: ${existingArticleId}`);
        response = await axios.put(
          `${DEVTO_API_URL}/${existingArticleId}`,
          articleData,
          { headers: { 'api-key': DEVTO_API_KEY } }
        );
        console.log(`Updated article: ${response.data.title} (ID: ${response.data.id})`);
      } else {
        // Create new article
        console.log('Creating new article');
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
        
        const updatedContent = `---\n${yaml.dump(updatedFrontMatter)}---\n\n${body}`;
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated front matter with Dev.to ID: ${response.data.id}`);
      }
      
      return response.data;
    } catch (apiError) {
      console.error(`API Error for ${filePath}:`, apiError.response?.data || apiError.message);
      // Log more detailed error information
      if (apiError.response) {
        console.error('API Response Status:', apiError.response.status);
        console.error('API Response Headers:', apiError.response.headers);
      }
      throw apiError; // Re-throw to be caught by the outer try-catch
    }
  } catch (error) {
    console.error(`Error processing article ${filePath}:`, error.message);
    if (error.stack) {
      console.error('Stack trace:', error.stack);
    }
  }
}

async function main() {
  console.log('Starting Dev.to publication process');
  let successCount = 0;
  let failureCount = 0;
  
  // Process each changed file
  for (const file of changedFiles) {
    if (file.endsWith('.md')) {
      try {
        await publishArticle(file);
        successCount++;
      } catch (error) {
        failureCount++;
      }
    } else {
      console.log(`Skipping non-markdown file: ${file}`);
    }
  }
  
  console.log(`Publication complete. Success: ${successCount}, Failures: ${failureCount}`);
}

main().catch(error => {
  console.error('Fatal error in publishing script:', error);
  process.exit(1);
});