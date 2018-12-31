import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projectData';
import { createNavbar, clickEvents } from './components/navbar/navbar';

const initializeApp = () => {
  loadProjects();
  createNavbar();
  clickEvents();
};

initializeApp();
