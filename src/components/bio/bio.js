import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import photo from '../../images/e8headshot.jpg';

const bioPage = () => {
  const bioString = `
  <div class="container d-flex flex-column justify-content-center p-5 mt-4">
  <div>
  <img id="bio-photo" src="${photo}" class="img-fluid d-block mx-auto" alt="Colin White">
  </div>
  <div id="bioDiv"> 
    <p>I am a Software Engineer with two years of experience in the fintech industry. 
    I am proficient in C#, Angular, SQL, and Kubernetes. 
    I am a continuous learner who is always striving to improve my skills and add value to the organization I serve.</>
    </div>
    </div>
  `;
  $('#bioPage').html(bioString);
};

export default bioPage;
