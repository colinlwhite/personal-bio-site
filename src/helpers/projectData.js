import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';
import projectsPrinter from '../components/projects/projects';

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

export default loadProjects;
