import $ from 'jquery';
import email from '../../images/email.svg';
import linkedin from '../../images/linkedin.png';
import githublack from '../../images/gitblack.svg';
import './contact.scss';

const contactPage = () => {
  const domString = `
  <div class="contact-div">
    <a href="mailto:clwhite814@gmail.com"><img id="contact-image" src="${email}" alt="Email"></a>
    <a href="https://www.linkedin.com/in/colinlwhite/" target="_blank"><img id="contact-image" src="${linkedin}" alt="LinkedIn"></a>
    <a href="https://github.com/colinlwhite" target="_blank"><img id="contact-image" src="${githublack}" alt="GitHub"></a>
  </div>
  `;
  $('#contactPage').html(domString);
};

export default contactPage;
