import $ from 'jquery';
import './home.scss';
import vid from './LiftOff.mov';

// const homePage = () => {
//   const domString = `
//   <h1 id="home-h1">console.log('Colin White: ', developer + ' and ' + Musician);</h1>
//   `;
//   $('#homeDiv').html(domString);
// };

// export default homePage;


const homePage = () => {
  const domString = `
  <header class="v-header container">
  <div class="fullscreen-video-wrap">
<video src="${vid}" autoplay="true" loop="true"></video>
  </div>
  <div class="header-overlay">
  <div>
  <h1>console.log('Colin White: ', developer + ' and ' + Musician);</h1>
  </div>
  </div>
  </header>
  `;
  $('#homeDiv').html(domString);
};

export default homePage;
