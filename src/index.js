import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import loadProjects from './helpers/projects';

const initializeApp = () => {
  // $('#tempdiv').html('<h1>This is a test</h1>');
  loadProjects();
};

initializeApp();
