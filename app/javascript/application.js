// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

const projectsLink = document.getElementById('projects-link');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

const projects = document.getElementById('projects');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

const projectsBox = projectsLink.querySelector('div');
const aboutBox = aboutLink.querySelector('div');
const contactBox = contactLink.querySelector('div');

projectsLink.addEventListener('click', (event) => {
  projects.style.display = 'block';
  about.style.display = 'none';
  contact.style.display = 'none';
  projectsBox.classList.remove('box-empty');
  projectsBox.classList.add('box-filled');
  aboutBox.classList.remove('box-filled');
  aboutBox.classList.add('box-empty');
  contactBox.classList.remove('box-filled');
  contactBox.classList.add('box-empty');
});

aboutLink.addEventListener('click', (event) => {
  projects.style.display = 'none';
  about.style.display = 'block';
  contact.style.display = 'none';
  projectsBox.classList.remove('box-filled');
  projectsBox.classList.add('box-empty');
  aboutBox.classList.remove('box-empty');
  aboutBox.classList.add('box-filled');
  contactBox.classList.remove('box-filled');
  contactBox.classList.add('box-empty');
});

contactLink.addEventListener('click', (event) => {
  projects.style.display = 'none';
  about.style.display = 'none';
  contact.style.display = 'block';
  projectsBox.classList.remove('box-filled');
  projectsBox.classList.add('box-empty');
  aboutBox.classList.remove('box-filled');
  aboutBox.classList.add('box-empty');
  contactBox.classList.remove('box-empty');
  contactBox.classList.add('box-filled');
});
