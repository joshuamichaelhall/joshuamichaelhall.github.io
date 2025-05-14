// assets/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // If the user has selected a theme before, use that; otherwise, use their system preference
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  if (isDark) {
    document.body.classList.add('dark-theme');
  }
  
  // Create and add the toggle button to the navigation
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('theme-toggle');
  toggleButton.setAttribute('aria-label', 'Toggle dark mode');
  toggleButton.style.display = 'inline-block'; // Ensure button is always visible
  toggleButton.style.background = 'transparent'; // Transparent background
  toggleButton.style.border = 'none'; // No border
  toggleButton.style.cursor = 'pointer'; // Pointer cursor on hover
  toggleButton.style.fontSize = '1.2rem'; // Larger icon
  toggleButton.style.padding = '0.3rem'; // Some padding
  
  // Find the nav element to append the button
  const navLinks = document.querySelector('.site-nav .nav-links');
  if (navLinks) {
    navLinks.appendChild(toggleButton);
  }
  
  // Add click event to toggle theme
  toggleButton.addEventListener('click', function() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleButton(isDark);
  });
  
  // Update the button icon based on the current theme
  function updateToggleButton(isDark) {
    toggleButton.innerHTML = isDark ? '☀️' : '🌓'; // Sun for dark mode (to switch to light), moon for light mode
    toggleButton.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  
  // Initialize button with correct icon
  updateToggleButton(isDark);
});