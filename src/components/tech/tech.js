import $ from 'jquery';
import 'bootstrap';
import './tech.scss';

const techPage = () => {
  const techString = `
  <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap 4</li>
    </ul>
 `;
  $('#technologiesPage').html(techString);
};

export default techPage;
