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
    <p>I revel that, as Alan Kay once said, "Technology is anything that wasn't around when you were born." 
    My recent experiences have positioned me to contribute and upload more than I consume and download. 
    I am excited to start contributing to the future of the web and technology as a whole.</>
    </div>
    </div>
  `;
  $('#bioPage').html(bioString);
};

export default bioPage;
