import $ from 'jquery';
import './navbar.scss';
import mylogo from '../../images/mylogo.png';
import 'bootstrap';

// Making the website a SPA

const clickEvents = () => {
  $('#navToHome').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').hide();
    $('#homeDiv').show();
  });

  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
  });
};

// The NavBar

const createNavbar = () => {
  const theNavbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <img class="navbar-brand" id="colin" src="${mylogo}" alt="Colin White">

  <div class="collapse navbar-collapse ml-auto" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" id="navToHome">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToBio">BIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToTechnologies">TECH</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToProjects">PROJECTS</a>
      </li>
    </ul>
  </div>
</nav>
`;
  $('#nav-element').html(theNavbar);
};

export { createNavbar, clickEvents };
