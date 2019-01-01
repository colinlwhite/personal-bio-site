import $ from 'jquery';
import 'bootstrap';
import './tech.scss';
import ajax from '../../images/AJAX.png';
import boot from '../../images/BOOT.svg';
import css from '../../images/CSS3.png';
import fb from '../../images/firebase.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import html5 from '../../images/html.png';
// import jq from '../../images/jquery.gif';
import js from '../../images/js.jpg';
import npm from '../../images/npm.png';
import r from '../../images/react.png';
import sass from '../../images/Sass.png';

const techPage = () => {
  const techString = `
  <h1 id="tech-header">TECHNOLOGIES</h1>
  <img id="colinw" src="${ajax}" alt="AJAX">
  <img id="colinw" src="${boot}" alt="Bootstrap">
  <img id="colinw" src="${css}" alt="CSS">
  <img id="colinw" src="${fb}" alt="Firebase">
  <img id="colinw" src="${git}" alt="Git">
  <img id="colinw" src="${github}" alt="Github">
  <img id="colinw" src="${html5}" alt="HTML 5">
  <img id="colinw" src="${js}" alt="JavaScript">
  <img id="colinw" src="${npm}" alt="NPM">
  <img id="colinw" src="${r}" alt="React">
  <img id="colinw" src="${sass}" alt="SASS">
 `;
  $('#technologiesPage').html(techString);
};

export default techPage;
