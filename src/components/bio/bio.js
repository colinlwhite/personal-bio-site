import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import photo from '../../images/e8headshot.jpg';

const bioPage = () => {
  const bioString = `
  <h1 id="bio-header">BIO</h1>
  <div>
  <img id="bio-photo" src="${photo}" class="img-fluid d-block mx-auto" alt="Colin White">
  </div>
  <div id="bioDiv">
  <p>Full Stack Developer transitioning from the music instruments industry into technology.</p>
    <p>I revel that, as Alan Kay once said, "Technology is anything that wasn't around when you were born."</p>
    <p>Nashville Software School is the beginning of my journey to contribute and upload more than I consume and download.</p>
    </div>
  `;
  $('#bioPage').html(bioString);
};

export default bioPage;
