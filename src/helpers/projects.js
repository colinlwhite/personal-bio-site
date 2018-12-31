import $ from 'jquery';
import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

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


// Making the website a SPA

const clickEvents = () => {
  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
  });
};

// Getting the Data

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((result) => {
      const allProjectsObject = result.data;
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((projectId) => {
          const newProject = allProjectsObject[projectId];
          newProject.id = projectId;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
      projectsPrinter(allProjectsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

clickEvents();

export default loadProjects;
