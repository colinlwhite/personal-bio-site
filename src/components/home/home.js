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

    const rolesArray = ['SON', 'VESSEL', 'HUSBAND', 'FATHER', 'BROTHER', 'UNCLE', 'DRUMMER', 'RUNNER', 'REAL ESTATE INVESTOR', 'PROBLEM SOLVER', 'SOFTWARE ENGINEER'];
    const spinningWheelElement = document.getElementById('spinning-wheel');

    let roleIndex = 0;
    let setIntervalFunction;
    let functionDelaySpeed = 50; // Initial function Delay Speed (milliseconds)

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
      }, 2000); // 2-second delay before displaying the final word
    }

    // Start spinning at a fast pace
    startSpinning();

    // Gradually slow down the spinning
    setTimeout(() => {
      clearInterval(setIntervalFunction); functionDelaySpeed = 100; startSpinning();
    }, 1000); // Slow down after 1 second
    setTimeout(() => {
      clearInterval(setIntervalFunction); functionDelaySpeed = 200; startSpinning();
    }, 2000); // Slow down after 2 seconds
    setTimeout(() => {
      clearInterval(setIntervalFunction); functionDelaySpeed = 400; startSpinning();
    }, 3000); // Slow down after 3 seconds
    setTimeout(stopSpinning, 4000); // Stop after 4 seconds
    // });
  });
};

export default homePage;
