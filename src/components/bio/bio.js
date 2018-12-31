import $ from 'jquery';
import 'bootstrap';
import './bio.scss';
import photo from './cw.jpg';

const bioPage = () => {
  const bioString = `
  <h1>BIO</h1>
  <img id="colin" src="${photo}" class="rounded-circle img-fluid d-block mx-auto" alt="Colin White">
  <p>Similar to a lot of Nashville Software School alumni, I'm a musician, specifically a drummer.</p>
    <p>I want to go into programming because it is the ground level of technology. Technology has always drove the music industry and really drove the entire success of the western culture.</p>
    <p>Traditionally, software programming has had a stigma around it. I love the challenge being uncomfortable and learning something in a new in a different discipline.</p
  `;
  $('#bioPage').html(bioString);
};

export default bioPage;
