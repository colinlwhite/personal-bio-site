import $ from 'jquery';
import './projects.scss';

// Printing the projects

const projectsPrinter = (projectsArray) => {
  let theProjects = '<h1 id="projects-header">PROJECTS</h1>';
  projectsArray.forEach((project) => {
    if (project.available === true) {
      theProjects += `
      <div class="card mb-3" id="project-card">
  <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${project.title}</h2>
    <p class="card-text">${project.description}</p>
    <p class="card-text">${project.technologiesUsed}</p>
    <a href="${project.githubUrl}" target="_blank"><button class="btn btn-dark">GITHUB</button></a>
    <a href="${project.url}" target="_blank"><button class="btn btn-dark"">DEMO</button></a>
  </div>
</div>
      `;
    }
  });
  $('#projectsPage').html(theProjects);
};

export default projectsPrinter;
