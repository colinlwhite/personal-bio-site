import $ from 'jquery';
import homePageVideo from './Rocket.mp4';
import './home.scss';

const homePage = () => {
  $(document).ready(() => {
    if ($(window).width() >= 1024) {
      const homePageHtml = `
       <header class="v-header container">
            <div class="fullscreen-video-wrap">
                <video src="${homePageVideo}" autoplay="true" loop="true" muted="muted"></video>
            </div>
            <div class="header-overlay">
            <div>
                <h1 class="home-page-header">COLIN L. WHITE</h1>
                <h2 class="home-page-header">SOFTWARE ENGINEER</h2>
            </div>
            </div>
       </header>
       `;
      $('#homeDiv').html(homePageHtml);
    } else {
      const homePageHtml = `

      `;
      $('#homeDiv').html(homePageHtml);
    }
  });
};

export default homePage;
