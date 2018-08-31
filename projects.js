console.log('Hello World');

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
      
];

const writeToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
}

const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
            domString += `<h1>${projects[i].title}</h1>`;
            domString += `<img src="${projects[i].screenshot}">`;
            domString += `<p>${projects[i].description}</p>`;
            domString += `<p>${projects[i].technologiesUsed}</p>`;
            domString += `<a href="${projects[i].url}"><a/>`;
            domString += `<a href="${projects[i].githubUrl}"><a/>`;
        }
    }
    writeToDom(domString, 'projectsPage');
}

createProjectCards();