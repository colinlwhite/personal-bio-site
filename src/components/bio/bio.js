import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import bioPhoto from '../../images/profilepicture.jpg';

const bioPage = () => {
  const bioTextContent = `
  I am a Software Engineer with three years of experience in the financial services industry. 
  I am proficient in C#, .NET Core, JavaScript, and SQL. 
  I am a continuous learner who is always striving to improve my skills and add value to the organization that I serve.
`;

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

  $('#bioPage').html(bioHTML);

  function typeEffect(bioParagraphTag, bioCharacters, typingSpeed) {
    let characterIndex = 0;
    const bioParagraphElement = bioParagraphTag;
    const typingInterval = setInterval(() => {
      if (characterIndex < bioCharacters.length) {
        bioParagraphElement.textContent += bioCharacters.charAt(characterIndex);
        characterIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
  }

  const bioTextTag = document.getElementById('bioText');

  typeEffect(bioTextTag, bioTextContent, 35); // 35ms per character
};

export default bioPage;
