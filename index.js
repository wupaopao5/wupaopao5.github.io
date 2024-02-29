var data = [
    {
        "class": "",
        "date": "2020-2024",
        "projects": [
            {
                "id": "guodong",
                "name": "果冻",
                "description": "Simple and accurate paint estimation with the iPhone camera",
                "logoImage": "assets/paintplanner-appicon.png",
                "bgImage": "assets/guodong-cover.jpg",
                "link": "https://apps.apple.com/us/app/paintplanner-paint-calculator/id6448839455"
            },
            {
                "id": "fantuan",
                "name": "饭团",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/fantuan-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
            {
                "id": "bilu",
                "name": "Bilu",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/bilu-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
            {
                "id": "bilu",
                "name": "Bilu",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/bilu2-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            }
        ],
    },
    {
        "class": "",
        "date": "2020-2024",
        "projects": [
            {
                "id": "guodong",
                "name": "果冻",
                "description": "Simple and accurate paint estimation with the iPhone camera",
                "logoImage": "assets/paintplanner-appicon.png",
                "bgImage": "assets/guodong-cover.jpg",
                "link": "https://apps.apple.com/us/app/paintplanner-paint-calculator/id6448839455"
            },
            {
                "id": "fantuan",
                "name": "饭团",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/fantuan-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
        ],
    },
    {
        "class": "",
        "date": "2020-2024",
        "projects": [
            {
                "id": "guodong",
                "name": "果冻",
                "description": "Simple and accurate paint estimation with the iPhone camera",
                "logoImage": "assets/paintplanner-appicon.png",
                "bgImage": "assets/guodong-cover.jpg",
                "link": "https://apps.apple.com/us/app/paintplanner-paint-calculator/id6448839455"
            },
            {
                "id": "fantuan",
                "name": "饭团",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/fantuan-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
            {
                "id": "guodong",
                "name": "果冻",
                "description": "Simple and accurate paint estimation with the iPhone camera",
                "logoImage": "assets/paintplanner-appicon.png",
                "bgImage": "assets/guodong-cover.jpg",
                "link": "https://apps.apple.com/us/app/paintplanner-paint-calculator/id6448839455"
            },
            {
                "id": "fantuan",
                "name": "饭团",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/fantuan-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
            {
                "id": "guodong",
                "name": "果冻",
                "description": "Simple and accurate paint estimation with the iPhone camera",
                "logoImage": "assets/paintplanner-appicon.png",
                "bgImage": "assets/guodong-cover.jpg",
                "link": "https://apps.apple.com/us/app/paintplanner-paint-calculator/id6448839455"
            },
            {
                "id": "fantuan",
                "name": "饭团",
                "description": "Over the board timekeeping for chess games",
                "logoImage": "assets/time-control-appicon.png",
                "bgImage": "assets/fantuan-cover.jpg",
                "link": "https://apps.apple.com/dk/app/time-control-for-chess/id1534015456"
            },
        ],
    },
];

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
            projectElement.link = project.link;
            projectElement.className = `fullWidthProject ${project.id}`;
            projectElement.innerHTML = `
                    <img src="${project.bgImage}">
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
    window.open('./about.html', '_blank');
}
  