import $ from 'jquery';
import vid from './Rocket.mp4';
import './home.scss';

const homePage = () => {
  if ($(window).width() >= 1024) {
    const domString = `
      <header class="v-header container">
      <div class="fullscreen-video-wrap">
    <video src="${vid}" autoplay="true" loop="true" muted="muted"></video>
      </div>
      <div class="header-overlay">
      <div>
      <h1 class="home-page-header">Colin White</h1>
      </div>
      </div>
      </header>
      `;
    $('#homeDiv').html(domString);
  } else {
    const domString = `
     <h1 id="home-h1">Colin White</h1>
     `;
    $('#homeDiv').html(domString);
  }
};

export default homePage;
