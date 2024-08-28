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

    // Spinning Wheel

    // document.addEventListener("DOMContentLoaded", function() {
    const words = ['Son', 'Husband', 'Father', 'Brother', 'Uncle', 'Drummer', 'REI', 'Software Engineer'];
    const spinningWheel = document.getElementById('spinning-wheel');

    let wordIndex = 0;
    let interval;
    let speed = 50; // Initial speed (milliseconds)

    function spin() {
      spinningWheel.textContent = words[wordIndex];
      wordIndex = (wordIndex + 1) % words.length;
    }

    function startSpinning() {
      interval = setInterval(spin, speed);
    }

    function stopSpinning() {
      clearInterval(interval);
      setTimeout(() => {
        spinningWheel.textContent = 'Software Engineer';
      }, 2000); // 2-second delay before displaying the final word
    }

    // Start spinning at a fast pace
    startSpinning();

    // Gradually slow down the spinning
    setTimeout(() => {
      clearInterval(interval); speed = 100; startSpinning();
    }, 1000); // Slow down after 1 second
    setTimeout(() => {
      clearInterval(interval); speed = 200; startSpinning();
    }, 2000); // Slow down after 2 seconds
    setTimeout(() => {
      clearInterval(interval); speed = 400; startSpinning();
    }, 3000); // Slow down after 3 seconds
    setTimeout(stopSpinning, 4000); // Stop after 4 seconds
    // });
  });
};

export default homePage;
