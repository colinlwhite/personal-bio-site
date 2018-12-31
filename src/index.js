import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projectData';
import { createNavbar, clickEvents } from './components/navbar/navbar';
import homePage from './components/home/home';

const initializeApp = () => {
  loadProjects();
  createNavbar();
  clickEvents();
  homePage();
};

initializeApp();
