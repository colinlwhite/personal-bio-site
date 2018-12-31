import $ from 'jquery';

// Printing the projects

const projectsPrinter = (projectsArray) => {
  let theProjects = '';
  projectsArray.forEach((project) => {
    if (project.available === true) {
      theProjects += `
      <h1>${project.title}</h1>
      <h1>${project.description}</h1>
      <h1>${project.technologiesUsed}</h1>
      `;
    }
  });
  $('#projectsPage').html(theProjects);
};

export default projectsPrinter;
