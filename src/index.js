import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projectData';
import { createNavbar, clickEvents } from './components/navbar/navbar';
import homePage from './components/home/home';
import bioPage from './components/bio/bio';
import techPage from './components/tech/tech';

const initializeApp = () => {
  loadProjects();
  createNavbar();
  clickEvents();
  homePage();
  bioPage();
  techPage();
};

initializeApp();
