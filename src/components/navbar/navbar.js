import $ from 'jquery';
import 'bootstrap';
import './navbar.scss';
import menu from '../../images/menu.png';


// Making the website a SPA

// const clickEvents = () => {
//   $('#navToHome').on('click', () => {
//     $('#bioPage').hide();
//     $('#technologiesPage').hide();
//     $('#projectsPage').hide();
//     $('#navToHome').hide();
//     $('#homeDiv').show();
//   });

//   $('#navToBio').on('click', () => {
//     $('#bioPage').show();
//     $('#technologiesPage').hide();
//     $('#projectsPage').hide();
//     $('#navToHome').show();
//     $('#homeDiv').hide();
//   });

//   $('#navToTechnologies').on('click', () => {
//     $('#technologiesPage').show();
//     $('#bioPage').hide();
//     $('#projectsPage').hide();
//     $('#navToHome').show();
//     $('#homeDiv').hide();
//   });

//   $('#navToProjects').on('click', () => {
//     $('#projectsPage').show();
//     $('#bioPage').hide();
//     $('#technologiesPage').hide();
//     $('#navToHome').show();
//     $('#homeDiv').hide();
//   });
// };

// The NavBar

// const createNavbar = () => {
//   const theNavbar = `
//   <nav class="navbar fixed-top navbar-expand-lg navbar-black bg-black">
//   <a class="navbar-brand">COLIN WHITE</a>
//   <button class="navbar-toggler" type="button"
// data-toggle="collapse" data-target="#navbarSupportedContent"
// aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item">
//         <a class="nav-link" id="navToHome">HOME <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" id="navToBio">BIO</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" id="navToTechnologies">TECH</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" id="navToProjects">PROJECTS</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//     `;
//   $('#nav-element').html(theNavbar);
// };

// export { createNavbar, clickEvents };

const clickEvents = () => {
  $('#openNavMenu').on('click', () => {
    console.log('The click lives!');
    document.getElementById('myNav').style.width = '100%';
  });
  $('#closeNavMenu').on('click', () => {
    // $('myNav').width('0%');
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToHome').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').hide();
    $('#homeDiv').show();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    document.getElementById('myNav').style.width = '0%';
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#navToHome').show();
    $('#homeDiv').hide();
    document.getElementById('myNav').style.width = '0%';
  });
};

const createNavbar = () => {
  const theNavbar = `
   <div id="myNav" class="overlay">

     <a href="javascript:void(0)" id="closeNavMenu" class="closebtn" onclick="closeNav()">X</a>

       <div class="overlay-content">
         <a href="#" id="navToHome">HOME</a>
         <a href="#" id="navToBio">BIO</a>
         <a href="#" id="navToTechnologies">TECH</a>
         <a href="#" id="navToProjects">PROJECTS</a>
       </div>

   </div>
   <a class="navbar-brand">COLIN WHITE</a>
   <span id="openNavMenu"><img id="menu" src="${menu}" alt="menu"></span>


   `;
  $('#nav-element').html(theNavbar);
};

export { createNavbar, clickEvents };
