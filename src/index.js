import './style.scss'
import Header from "./modules/ui/header";
import appendSideMenu from "./modules/ui/side-menu";
import appendMainArea from "./modules/ui/main-area";
import Form from "./modules/ui/form";
import ProjectService from "./modules/logic/project-service";
import UiService from "./modules/ui/ui-service";
import Task from "./modules/logic/task";


/**
 * Function: Will Generate the Add project Form. To see event handling related to it, check handleAddProjectForm()
 * method.
 * @returns {*}
 * @constructor
 */
const AddProjectForm = () => {
    const formElement = Form(`add-project`, `aside`);
    formElement.setTitle('New Project');
    formElement.addInputField(`project-name`, `Project Name`, `text`);
    formElement.addButton('Confirm');
    formElement.addButton(`Cancel`);
    return formElement.getHtmlElement();
}
/**
 * Function: Will handle Events related to the Add Project Form returned by AddProjectForm() method.
 */
const handleAddProjectForm = () => {
    /**
     * Function: Will remove the add project Form by setting its wrapper to display:none
     */
    const clearForm = () => {
        document.getElementById(`project-name-form-input`).value = ``;
        document.getElementById(`add-project-form-wrapper`).style.display = `none`;
    }

    /**
     * Function: Will call UiService and ProjectService to add the new Project.
     * @param projectName: is grabbed from input element with Id = `project-name-form-input`
     */
    const confirmAddProject = (projectName) => {
        const newProject = ProjectService.addProject(projectName);
        UiService.addNewProject(newProject);
    }

    document.getElementById(`add-project-form-wrapper`).addEventListener(`click`, (event) => {
        event.preventDefault();

        switch (event.target.id) {
            case `add-project-Cancel-btn`:
                clearForm();
                break;
            case `add-project-Confirm-btn`:
                confirmAddProject(document.getElementById(`project-name-form-input`).value);
                clearForm();
                break;
            case `add-project-form-wrapper`:
                clearForm();
                break;
        }
    })
}

const AddTaskForm = () => {
    const formElement = Form(`add-task`, `.main-container`);
    formElement.setTitle('New Task');
    formElement.addInputField(`task-description`, `Description`, `text`);
    formElement.addInputField(`task-elapsed-time`, `Elapsed Time (hours)`, `number`);
    formElement.addInputField(`due-date`, `Due Date`, `date`);
    formElement.addButton(`Confirm`);
    formElement.addButton(`Cancel`);
    return formElement.getHtmlElement();
}
const handleAddTaskFrom = () => {
    const handleCancelBtn = () => {
        document.getElementById(`add-task-form-wrapper`).style.display = `none`;

    }

    const handleConfirmBtn = () => {
        const projectId = Number(document.querySelector(`.project-container`).getAttribute(`data-project-id`));
        console.log(`Project ID: ${projectId}`);
        const description = document.getElementById(`task-description-form-input`).value;
        const elapsedTime = document.getElementById(`task-elapsed-time-form-input`).value;
        const dueDate = document.getElementById(`due-date-form-input`).value;

        const newTask = Task(description, elapsedTime, dueDate, projectId);
        ProjectService.addTask(projectId, newTask);
        UiService.displayProject(ProjectService.findProjectById(projectId));
        resetForm();
        document.getElementById(`add-task-form-wrapper`).style.display = `none`;


    }

    const resetForm = () => {
        document.querySelectorAll(`.form-input`).forEach(i => {
            i.value = '';
        })
    }

    document.getElementById(`add-task-form-wrapper`)
        .addEventListener(`click`, (event) => {
           switch (event.target.id) {
                case `add-task-Confirm-btn`:
                    handleConfirmBtn();
                    resetForm();
                    break;
                case `add-task-Cancel-btn`:
                    handleCancelBtn();
                    resetForm();
                    break;
                case `add-task-form-wrapper`:
                    document.getElementById(`add-task-form-wrapper`).style.display = `none`;
                    resetForm();
                    break;

            }
        })
}


(() => {

    const body = document.querySelector('#content');
    body.appendChild(Header());

    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    body.appendChild(mainContainer);
    appendSideMenu(mainContainer);
    appendMainArea(mainContainer);
    AddProjectForm();
    handleAddProjectForm();
    AddTaskForm();
    handleAddTaskFrom();
    //--------------------------Test Stuff---------------------------
    const testproject = ProjectService.addProject(`Test`);

    UiService.addNewProject(testproject);
    testproject.addTask(Task(`Feed the fishes`, 12,'2014/03/12',testproject.getId()))
    testproject.addTask(Task(`Feed the Dogs`, 3,'2021/03/03',testproject.getId()))
    testproject.addTask(Task(`Feed Myself`, 1,'2014/03/12',testproject.getId()))

})()
