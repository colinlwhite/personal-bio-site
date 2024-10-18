import $ from 'jquery';
import 'bootstrap';
import './navbar.scss';
import bioPage from '../bio/bio';
import menuButton from '../../images/menu.png';
import closeButton from '../../images/close.png';

const clickEvents = () => {
  $('#openNavMenu').on('click', () => {
    document.getElementById('myNav').style.width = '100%';
    $('#openNavMenu').hide();
  });
  $('#closeNavMenu').on('click', () => {
    document.getElementById('myNav').style.width = '0%';
    $('#openNavMenu').show();
  });

  $('#navToHome').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').hide();
    $('#homeDiv').show();
    $('#contactPage').hide();
    $('#openNavMenu').show();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    bioPage();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    $('#contactPage').hide();
    $('#openNavMenu').show();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    $('#contactPage').hide();
    $('#openNavMenu').show();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    $('#contactPage').hide();
    $('#openNavMenu').show();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToContact').on('click', () => {
    $('#contactPage').show();
    $('#projectsPage').hide();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#navToHome').hide();
    $('#homeDiv').hide();
    $('#openNavMenu').show();
    document.getElementById('myNav').style.width = '0%';
  });
};

const createNavbar = () => {
  const theNavbar = `
   <div id="myNav" class="overlay">

     <a href="javascript:void(0)" id="closeNavMenu" class="closebtn" onclick="closeNav()"><img src="${closeButton}"></a>

       <div class="overlay-content">
         <a href="#" id="navToHome">HOME</a>
         <a href="#" id="navToBio">BIO</a>
         <a href="#" id="navToTechnologies">TECH</a>
         <a href="#" id="navToProjects">PROJECTS</a>
         <a href="#" id="navToContact">CONTACT</a>
       </div>

   </div>
   <a href="/" class="navbar-brand">COLIN WHITE</a>
   <span id="openNavMenu"><img id="menu" src="${menuButton}" alt="menu"></span>
   `;
  $('#nav-element').html(theNavbar);
};

export { createNavbar, clickEvents };
