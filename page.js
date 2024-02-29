document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    data.forEach(item => {
      item.projects.forEach(project => {
        if (project.id == myParam) {
            document.title = `Paopao-${project.name}`;
            project.imgs.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img;
                container.appendChild(imgElement);
            });
        }
      });
    });
});