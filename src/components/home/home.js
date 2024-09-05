import $ from 'jquery';
import homePageVideo from './Rocket.mp4';
import './home.scss';

const homePage = () => {
  $(() => {
    if ($(window).width() >= 1024) {
      const homePageHtml = `
        <header class="v-header container">
          <div class="fullscreen-video-wrap">
            <video src="${homePageVideo}" autoplay="true" loop="true" muted="muted"></video>
          </div>
          <div class="header-overlay">
            <div>
              <h1 class="home-page-header">COLIN L. WHITE</h1>
              <h2 class="home-page-header" id="spinning-wheel">SOFTWARE ENGINEER</h2>
            </div>
          </div>
        </header>
       `;
      $('#homeDiv').html(homePageHtml);
    } else {
      const homePageHtml = ` 
        <!-- Empty content for smaller screens -->
      `;
      $('#homeDiv').html(homePageHtml);
    }

    const rolesArray = ['SON', 'VESSEL', 'HUSBAND', 'FATHER', 'BROTHER', 'UNCLE', 'DRUMMER', 'RUNNER', 'REAL ESTATE INVESTOR', 'PROBLEM SOLVER', 'C# DEVELOPER', '.NET DEVELOPER'];
    const spinningWheelElement = document.getElementById('spinning-wheel');

    let roleIndex = 0;
    let setIntervalFunction;
    let functionDelaySpeed = 50;

    function spin() {
      spinningWheelElement.textContent = rolesArray[roleIndex];
      roleIndex = (roleIndex + 1) % rolesArray.length;
    }

    function startSpinning() {
      setIntervalFunction = setInterval(spin, functionDelaySpeed);
    }

    function stopSpinning() {
      clearInterval(setIntervalFunction);
      setTimeout(() => {
        spinningWheelElement.textContent = 'SOFTWARE ENGINEER';
      }, 1050);
    }

    startSpinning();

    setTimeout(() => {
      clearInterval(setIntervalFunction);
      functionDelaySpeed = 100;
      startSpinning();
    }, 1000);

    setTimeout(() => {
      clearInterval(setIntervalFunction);
      functionDelaySpeed = 200;
      startSpinning();
    }, 2000);

    setTimeout(() => {
      clearInterval(setIntervalFunction);
      functionDelaySpeed = 400;
      startSpinning();
    }, 3000);

    setTimeout(stopSpinning, 4000);
  });
};

export default homePage;
