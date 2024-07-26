import $ from 'jquery';
import './projects.scss';

const projectsPrinter = (projectsArray) => {
  let projectsPageHtml = '<h1 id="projects-header">PROJECTS</h1>';
  projectsArray.forEach((project) => {
    if (project.available === true) {
      projectsPageHtml += `
      <div class="card mb-3 mx-auto" id="project-card" style="width: 50rem;">
  <img class="card-img-top" src="${project.screenshot}" alt="Card image cap">
  <div class="card-body">
    <h1 class="card-title">${project.title}</h1>
    <p class="card-text">${project.description}</p>
    <p class="card-text"><strong>Technologies Used:</strong> ${project.technologiesUsed}</p>
    <a href="${project.githubUrl}" target="_blank">GitHub</a>

    <a href="${project.url}" target="_blank">Demo</a>
  </div>
</div>
      `;
    }
  });
  $('#projectsPage').html(projectsPageHtml);
};

export default projectsPrinter;
