// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const linkedinToggle = document.getElementById('linkedin-toggle');
    const linkedinIcon = document.getElementById('linkedin-icon');
    const githubToggle = document.getElementById('github-toggle');
    const githubIcon = document.getElementById('github-icon');
    const body = document.body;
    const header = document.querySelector('header');

    // Set initial theme based on user preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    

    // Add event listener to toggle theme
    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
        setTheme(newTheme);
        const click = body.classList.contains('nav_item') ? 'before' : 'after';
        setItem(clicked);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            header.classList.add('dark-mode'); // Add this line
            header.classList.remove('light-mode'); // Add this line
            linkedinIcon.src = 'img/linkedin_dark_mode.png'; 
            githubIcon.src = 'img/github_dark_mode.png'; 
            themeIcon.src = 'img/light_mode.png'; 
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            header.classList.add('light-mode'); // Add this line
            header.classList.remove('dark-mode'); // Add this line
            linkedinIcon.src = 'img/linkedin_light_mode.png';
            githubIcon.src = 'img/github_light_mode.png';
            themeIcon.src = 'img/dark_mode.png'; 
        }
        localStorage.setItem('theme', theme); // Save theme preference
    }

    function setButtonColor(clicked){
        if (clicked == 'after'){
            body.classList.add('after');
        }
        else{
            body.classList.add('before')
        }
        localStorage.setItem('clicked', clicked)
    }
});

document.querySelectorAll('.nav_item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all items
        document.querySelectorAll('.nav_item').forEach(navItem => {
            navItem.classList.remove('active');
        });

        // Add 'active' class to the clicked item
        this.classList.add('active');
    });
});