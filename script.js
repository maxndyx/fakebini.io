const themeToggleButton = document.getElementById('themeToggle');
const themeStylesheet = document.getElementById('themeStylesheet');

themeToggleButton.addEventListener('click', function() {
    // Check the current theme and toggle
    if (themeStylesheet.getAttribute('href') === 'light.css') {
        themeStylesheet.setAttribute('href', 'dark.css');
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeStylesheet.setAttribute('href', 'light.css');
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});