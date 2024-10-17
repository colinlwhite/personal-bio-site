import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import bioPhoto from '../../images/profilepicture.jpg';

const bioPage = () => {
// The content that will be typed into the <p> tag
  const bioTextContent = `
  I am a Software Engineer with three years of experience in the financial services industry. 
  I am proficient in C#, .NET Core, Angular, SQL, and Kubernetes. 
  I am a continuous learner who is always striving to improve my skills and add value to the organization that I serve.
`;

  // Define the HTML structure for the bio page
  const bioHTML = `
    <div class="container d-flex flex-column justify-content-center p-5 mt-4">
      <div>
        <img id="bio-photo" src="${bioPhoto}" class="img-fluid d-block mx-auto" alt="Colin White">
      </div>
      <div id="bioDiv"> 
        <p id="bioText"></p> <!-- This starts empty and gets filled dynamically -->
      </div>
    </div>
  `;
    // Inject the HTML into the #bioPage container
  $('#bioPage').html(bioHTML);

  // Function to apply the typing effect
  function typeEffect(targetElement, textToType, typingSpeed) {
    let charIndex = 0; // Keep track of which character we're on
    const elementHolder = targetElement;
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        elementHolder.textContent += textToType.charAt(charIndex); // Add one character
        charIndex += 1; // Move to the next character
      } else {
        clearInterval(typingInterval); // Stop once the full text is typed out
      }
    }, typingSpeed);
  }
  // Get the <p> element where the text will appear
  const bioTextElement = document.getElementById('bioText');

  // Start the typing effect with the bio content
  typeEffect(bioTextElement, bioTextContent, 35); // 35ms per character
};

export default bioPage;
