import $ from 'jquery';
import email from '../../images/email.svg';
import linkedin from '../../images/linkedin.png';
import github from '../../images/gitblack.svg';
import './contact.scss';

const contactPage = () => {
  const contactPageHtml = `
  <div id="contact-div">
    <a href="mailto:clwhite814@gmail.com"><img class="contact-icon" src="${email}" alt="Email"></a>
    <a href="https://www.linkedin.com/in/colinlwhite/" target="_blank"><img class="contact-icon" src="${linkedin}" alt="LinkedIn"></a>
    <a href="https://github.com/colinlwhite" target="_blank"><img class="contact-icon" src="${github}" alt="GitHub"></a>
  </div>
  `;
  $('#contactPage').html(contactPageHtml);
};

export default contactPage;
