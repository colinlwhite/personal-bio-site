import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projectData';
import { createNavbar, clickEvents } from './components/navbar/navbar';
import homePage from './components/home/home';
import bioPage from './components/bio/bio';
import techPage from './components/tech/tech';
import contactPage from './components/contact/contact';

const initializeApp = () => {
  homePage();
  loadProjects();
  createNavbar();
  clickEvents();
  bioPage();
  techPage();
  contactPage();
};

initializeApp();
