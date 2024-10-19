import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projectData';
import { createNavbar, clickEvents } from './components/navbar/navbar';
import homePage from './components/home/home';
// import techPage from './components/tech/tech';
import contactPage from './components/contact/contact';

const initializeApp = () => {
  loadProjects();
  createNavbar();
  homePage();
  clickEvents();
  // techPage();
  contactPage();
};

initializeApp();
