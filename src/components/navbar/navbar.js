import $ from 'jquery';
import 'bootstrap';
import './navbar.scss';

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

// // The NavBar

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
    $('myNav').width('100%');
    console.log('o the days, it works though');
  });
  $('#closeNavMenu').on('click', () => {
    $('myNav').width('0%');
    console.log('o the days, it works though');
  });
};

const createNavbar = () => {
  const theNavbar = `
  <div id="myNav" class="overlay">

    <a href="javascript:void(0)" id="closeNavMenu" class="closebtn" onclick="closeNav()">X</a>

      <div class="overlay-content">
        <a href="#">HOME</a>
        <a href="#">BIO</a>
        <a href="#">TECH</a>
        <a href="#">PROJECTS</a>
      </div>

  </div>

  <span id="openNavMenu">OPEN</span>

  `;
  $('#nav-element').html(theNavbar);
};

export { createNavbar, clickEvents };
