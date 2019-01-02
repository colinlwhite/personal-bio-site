import $ from 'jquery';
import './footer.scss';
import email from '../../images/email.svg';
import linkedin from '../../images/linkedin.png';
import githublack from '../../images/gitblack.svg';

const footerStuff = () => {
  const domString = `
    <a class="navbar-brand">&copy; 2019 Colin White</a>
    <a href="mailto:clwhite814@gmail.com"><img id="footer-image" src="${email}" alt="Email"></a>
    <a href="https://www.linkedin.com/in/colinlwhite/" target="_blank"><img id="footer-image" src="${linkedin}" alt="LinkedIn"></a>
    <a href="https://github.com/colinlwhite" target="_blank"><img id="footer-image" src="${githublack}" alt="GitHub"></a>
  <!-- </nav> -->
</footer>
  `;
  $('.page-footer').html(domString);
};

export default footerStuff;
