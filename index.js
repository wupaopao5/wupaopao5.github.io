document.addEventListener('DOMContentLoaded', function() {
        const projectsSection = document.querySelector('.projectsSection');
        data.forEach(item => {
          const projectElementH = document.createElement('h3');
          projectElementH.textContent = item.date;
          projectsSection.appendChild(projectElementH);

          const projectElementDiv = document.createElement('div');
          projectElementDiv.className = "projectsGrid";
          projectsSection.appendChild(projectElementDiv);
         
          item.projects.forEach(project => {
            const projectElement = document.createElement('a');
            projectElement.href = `${project.link}?id=${project.id}`;
            projectElement.target = '_blank';
            projectElement.className = `fullWidthProject ${project.id}`;
            projectElement.innerHTML = `
                    <img src="${imageUrl(project.bgImage)}">
                    <div class="projectInfo">
                        <p class="projectTitle">${project.name}</p>
                        <p class="projectDescription">${project.description}</p>
                    </div>
            `;
            projectElementDiv.appendChild(projectElement);
          });
    });
});

function clickMe() {
    window.open("./about.html", "_blank");
}