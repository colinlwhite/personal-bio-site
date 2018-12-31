import $ from 'jquery';
import './home.scss';

const homePage = () => {
  const domString = `
  <h1>console.log('Colin White: ', developer + " and " + Musician);</h1>
  `;
  $('#homeDiv').html(domString);
};

export default homePage;
