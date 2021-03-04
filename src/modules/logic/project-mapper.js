import taskToHtml from './task-mapper';

const createBtn =(btnClassName, btnText, projectID)=>{
    const btn = document.createElement('button');
    btn.className=btnClassName;
    btn.innerText = btnText;
    if (projectID){
        btn.setAttribute(`data-project-id`,projectID);
    }
    return btn;
}

const projectToHtml =(project)=>{

    const projectContainer = document.createElement('div');
    projectContainer.className = `project-container`;
    projectContainer.setAttribute(`data-project-id`,project.getId());

    const title = document.createElement('h1');
    title.innerText = project.getName();

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.className=`project-btn-container`;

    const addNewTaskBtn =createBtn(`add-task-btn`, `+Task`);

    const deleteProjectBtn = createBtn(`delete-project-btn`,`Delete Project`, project.getId());

    projectBtnContainer.append(addNewTaskBtn, deleteProjectBtn);
    projectContainer.append(title, projectBtnContainer);

    project.getTaskList().map( t => taskToHtml(t))
        .forEach( t =>{
            projectContainer.appendChild(t);
        })

    return projectContainer;
}
export default projectToHtml;