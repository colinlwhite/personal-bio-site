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
  $('#homeView').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#homeView').hide();
  });

  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#homeView').show();
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#homeView').show();
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#homeView').show();
  });
};

// The NavBar

const createNavbar = () => {
  const theNavbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Colin L. White</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" id="homeView" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToBio" href="#">Bio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToTechnologies" href="#">Technologies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToProjects" href="#">Projects</a>
      </li>
    </ul>
  </div>
</nav>
`;
  $('#nav-element').html(theNavbar);
};

createNavbar();


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
