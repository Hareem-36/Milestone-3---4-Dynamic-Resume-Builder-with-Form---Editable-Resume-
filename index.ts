// Function to toggle the visibility of the skills section
const toggleSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
};

// Function to toggle the visibility of the projects section
const toggleProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.style.display = projectsSection.style.display === 'none' ? 'block' : 'none';
    }
};

// Adding event listeners to the buttons
const buttonSkills = document.getElementById('toggle-skills');
const buttonProjects = document.getElementById('toggle-projects');
if (buttonSkills) {
    buttonSkills.addEventListener('click', toggleSkills);
}

if (buttonProjects) {
    buttonProjects.addEventListener('click', toggleProjects);
}
