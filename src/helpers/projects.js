
import $ from 'jquery';

// // const projects = [
// //     {
// //         title: "Cool Project",
// //         screenshot: "http://gotoflashgames.com/files/file/033.jpg",
// //         description: "This is the best project",
// //         technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
// //         available: true,
// //         url: "https://github.com/nss-evening-cohort-8/js-part-deux",
// //         githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// //       },
// //       {
// //         title: "Cool Project",
// //         screenshot: "http://gotoflashgames.com/files/file/033.jpg",
// //         description: "This is the best project",
// //         technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
// //         available: true,
// //         url: "https://github.com/nss-evening-cohort-8/js-part-deux",
// //         githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
// //       }

// // ];

// const writeToDom = (stringToPrint, divId) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += stringToPrint;
// }

// const createProjectCards = () => {
//     let domString = '';
//     for (let i = 0; i < projects.length; i++) {
//         if (projects[i].available === true) {
//             domString += `<h1>${projects[i].title}</h1>`;
//             domString += `<img src="${projects[i].screenshot}">`;
//             domString += `<p>${projects[i].description}</p>`;
//             domString += `<p>${projects[i].technologiesUsed}</p>`;
//             domString += `<a href="${projects[i].url}"><a/>`;
//             domString += `<a href="${projects[i].githubUrl}"><a/>`;
//         }
//     }
//     writeToDom(domString, 'projectsPage');
// }

// createProjectCards();

// // START OPTION 1

// // NAVIGATION BAR FUNCTIONING ON CLICK EVENTS

// let bioDiv = document.getElementById('bioPage');
// let techDiv = document.getElementById('technologiesPage');
// let projectsDiv = document.getElementById('projectsPage');


// const grabbing = () => {
//     document.getElementById('navToBio').addEventListener('click', showBio);
//     document.getElementById('navToTechnologies').addEventListener('click', showTech);
//     document.getElementById('navToProjects').addEventListener('click', showProjects);
// }

// const showBio = () => {
//    bioDiv.style.display = 'block';
//    techDiv.style.display = 'none';
//    projectsDiv.style.display = 'none';
// }

// const showTech = () => {
//     techDiv.style.display = 'block';
//     bioDiv.style.display = 'none';
//     projectsDiv.style.display = 'none';
// }

// const showProjects = () => {
//    projectsDiv.style.display = 'block';
//    techDiv.style.display = 'none';
//    bioDiv.style.display = 'none';

// }

// grabbing();

// // END OPTION 1

const loadProjects = () => {
  $.get('../db/projects.json')
    .done((data) => {
      console.log(data);
    })
    .fail((error) => {
      console.log(error);
    });
};

export default loadProjects;
