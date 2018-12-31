import $ from 'jquery';

// Making the website a SPA

const clickEvents = () => {
  $('#homeView').on('click', () => {
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#homeView').hide();
    $('#homeDiv').show();
  });

  $('#navToBio').on('click', () => {
    $('#bioPage').show();
    $('#technologiesPage').hide();
    $('#projectsPage').hide();
    $('#homeView').show();
    $('#homeDiv').hide();
  });

  $('#navToTechnologies').on('click', () => {
    $('#technologiesPage').show();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#homeView').show();
    $('#homeDiv').hide();
  });

  $('#navToProjects').on('click', () => {
    $('#projectsPage').show();
    $('#bioPage').hide();
    $('#technologiesPage').hide();
    $('#homeView').show();
    $('#homeDiv').hide();
  });
};

// The NavBar

const createNavbar = () => {
  const theNavbar = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Colin L. White</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" id="homeView" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToBio" href="#">Bio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToTechnologies" href="#">Technologies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="navToProjects" href="#">Projects</a>
      </li>
    </ul>
  </div>
</nav>
`;
  $('#nav-element').html(theNavbar);
};

export { createNavbar, clickEvents };
