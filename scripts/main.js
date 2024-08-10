let templates = document.getElementById('templates');
let services = document.getElementById('services');
let intro = document.getElementById('top-content');
let projects = document.getElementById('projects');
function toggleTemplates(){

    if(templates.style.display === 'none'){
        templates.style.display = 'block';
        intro.style.display = 'none';
        services.style.display = 'none';
        projects.style.display = 'none';
    } else if(services.style.display === 'none'){
        templates.style.display = 'none';
        intro.style.display = 'none';
        services.style.display = 'block';
        projects.style.display = 'none';
    } else{
        templates.style.display = 'none';
        intro.style.display = 'block';
        services.style.display = 'none';
        projects.style.display = 'none';
    }
}
function backToTop(){
    if(intro.style.display === 'none'){
        intro.style.display = 'block';
        templates.style.display = 'none';
        services.style.display = 'none';
        projects.style.display = 'none';
    }
}

toggleTemplates()
backToTop()