import projectToHtml from "../logic/project-mapper";


/**
 * Function: Will add project to side menu - <ul class="project-list">
 * @param project
 */
const addNewProject = (project)=>{

    const projectList = document.querySelector('.project-list');
    const listItem = document.createElement('li');
    listItem.setAttribute(`data-project-id`,project.getId());
    const groupName = document.createElement('a');

    groupName.setAttribute('data-project-id',project.getId());
    groupName.href='';
    groupName.className='project-link';
    groupName.textContent = project.getName();

    listItem.appendChild(groupName);
    projectList.appendChild(listItem);

}

/**
 * Function: Will display Project info.
 * @param project: Is project object.
 */
const displayProject =(project)=>{

    const projectArea = document.querySelector('.project-area');
    clearProjectArea();
    projectArea.append(projectToHtml(project));


}

const clearProjectArea =()=>{
    const projectContainer = document.querySelector('.project-container');
    if (projectContainer){
        projectContainer.remove();
    }
}

const deleteProject =(projectId)=>{
    clearProjectArea();
    document.querySelector(`li[data-project-id="${projectId}"]`).remove();
}











export default {addNewProject, displayProject, deleteProject}