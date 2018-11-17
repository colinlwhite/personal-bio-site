import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import loadProjects from './projects';

const initializeApp = () => {
  $('#tempdiv').html('<h1>This is a test</h1>');
  console.log('it is working');
  loadProjects();
};

initializeApp();
