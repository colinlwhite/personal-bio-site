import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import bioPhoto from '../../images/profilepicture.jpg';

// Typing effect function
function typeEffect(element, speed) {
  const targetElement = element;
  const text = targetElement.innerHTML;
  targetElement.innerHTML = ''; // Clear the text first
  let i = 0;

  const timer = setInterval(() => {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i += 1;
    } else {
      clearInterval(timer); // Stop the timer once all text is typed
    }
  }, speed);
}

const bioPage = () => {
  const bioString = `
    <div class="container d-flex flex-column justify-content-center p-5 mt-4">
      <div>
        <img id="bio-photo" src="${bioPhoto}" class="img-fluid d-block mx-auto" alt="Colin White">
      </div>
      <div id="bioDiv"> 
        <p>I am a Software Engineer with two years of experience in the fintech industry. 
        I am proficient in C#, Angular, SQL, and Kubernetes. 
        I am a continuous learner who is always striving to improve my skills and add value to the organization I serve.</p>
      </div>
    </div>
  `;
  $('#bioPage').html(bioString);

  // Apply the typing effect after injecting content
  const bioTextElement = document.getElementById('bioText');
  typeEffect(bioTextElement, 100); // 100ms per character
};

export default bioPage;
