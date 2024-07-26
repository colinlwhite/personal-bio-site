import $ from 'jquery';
import 'bootstrap';
import './tech.scss';
import ajax from '../../images/AJAX.png';
import angular from '../../images/angular.png';
import bootstrap from '../../images/BOOT.svg';
import cSharp from '../../images/csharp.png';
import css from '../../images/CSS3.png';
import dotNet from '../../images/dotnet.png';
import firebase from '../../images/firebase.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import html from '../../images/html.png';
import jquery from '../../images/jquery2.png';
import js from '../../images/js.jpg';
import kubernetes from '../../images/kubernetes.png';
import npm from '../../images/npm.png';
import postman from '../../images/postman.png';
import react from '../../images/react.png';
import rxjs from '../../images/rxjs.png';
import sass from '../../images/Sass.png';
import sqlServer from '../../images/sqlserver.png';
import twilio from '../../images/twilio.png';
import typeScript from '../../images/typescript.png';
import visualStudio from '../../images/visualstudio.png';
import visualStudioCode from '../../images/vscode.png';
import webpack from '../../images/theweb.png';

const techPage = () => {
  const techPageHtml = `
    <h1 id="tech-header">TECH</h1>
    <div id="tech-icons">
      <img class="tech-icon" src="${ajax}" alt="AJAX">
      <img class="tech-icon" src="${angular}" alt="Angular">
      <img class="tech-icon" src="${bootstrap}" alt="Bootstrap">
      <img class="tech-icon" src="${cSharp}" alt="C#">
      <img class="tech-icon" src="${css}" alt="CSS">
      <img class="tech-icon" src="${dotNet}" alt="Microsoft .NET">
      <img class="tech-icon" src="${firebase}" alt="Firebase">
      <img class="tech-icon" src="${git}" alt="Git">
      <img class="tech-icon" src="${github}" alt="GitHub">
      <img class="tech-icon" src="${html}" alt="HTML 5">
      <img class="tech-icon" src="${jquery}" alt="jQuery">
      <img class="tech-icon" src="${js}" alt="JavaScript">
      <img class="tech-icon" src="${kubernetes}" alt="Kubernetes">
      <img class="tech-icon" src="${npm}" alt="NPM">
      <img class="tech-icon" src="${postman}" alt="Postman">
      <img class="tech-icon" src="${react}" alt="React">
      <img class="tech-icon" src="${rxjs}" alt="RxJS">
      <img class="tech-icon" src="${sass}" alt="SASS">
      <img class="tech-icon" src="${sqlServer}" alt="SQL Server">
      <img class="tech-icon" src="${twilio}" alt="Twilio">
      <img class="tech-icon" src="${typeScript}" alt="TypeScript">
      <img class="tech-icon" src="${visualStudio}" alt="Visual Studio">
      <img class="tech-icon" src="${visualStudioCode}" alt="Visual Studio Code">
      <img class="tech-icon" src="${webpack}" alt="Webpack">
    </div>
  `;
  $('#technologiesPage').html(techPageHtml);
};

export default techPage;
