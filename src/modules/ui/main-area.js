import ProjectService from "../logic/project-service";
import UiService from "./ui-service";
import Form from "./form";

const handleAddTaskBtn = () => {
    document.getElementById(`add-task-form-wrapper`).style.display = `flex`;
}

const handleDeleteProjectBtn = (projectId) => {
    UiService.deleteProject(projectId);
    ProjectService.deleteProject(projectId);

}
const handleDoneTaskBtn = (projectId, taskId) => {
    const project = ProjectService.findProjectById(projectId);
    const task = project.findTaskById(taskId);

    document.querySelector(`.done-task-btn[data-task-id="${taskId}"]`)
        .setAttribute(`data-is-done`, `${!task.isDone()}`);

    task.isDone() ? task.markAsUndone() : task.markAsDone();
}


const handleDeleteTaskBtn = (projectId, taskId) => {
    const project = ProjectService.findProjectById(projectId);
    project.deleteTask(taskId);
    UiService.displayProject(project);
}

const initializeEventHandlers = (container) => {
    container.addEventListener(`click`, (event) => {
        console.log(event.target.className);
        switch (event.target.className) {
            case `add-task-btn`:
                handleAddTaskBtn();
                break;
            case `delete-project-btn`:
                handleDeleteProjectBtn(Number(event.target.getAttribute(`data-project-id`)))
                break;
            case `done-task-btn`:
                handleDoneTaskBtn(Number(event.target.getAttribute(`data-project-id`)),
                    Number(event.target.getAttribute(`data-task-id`)))
                break;
            case `delete-task-btn`:
                handleDeleteTaskBtn(Number(event.target.getAttribute(`data-project-id`)),
                    Number(event.target.getAttribute(`data-task-id`)));
                break;
        }
    })
}

const appendMainArea = (container) => {
    const mainArea = document.createElement('div');
    mainArea.className = 'project-area';
    container.appendChild(mainArea);
    initializeEventHandlers(mainArea);

}

export default appendMainArea;