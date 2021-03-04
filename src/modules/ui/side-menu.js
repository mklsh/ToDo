import UiService from "./ui-service"
import ProjectService from "../logic/project-service"

/**
 * Creates the Add Project button
 * @returns {HTMLButtonElement} Will return html element to be appended.
 * @constructor
 */
const NewProjectBtn = () => {
    const btn = document.createElement('button');
    btn.className = `add-project-btn`;
    btn.textContent = '+Project'
    return btn;
}

const handleAddProjectBtn =()=>{
    document.getElementById(`add-project-form-wrapper`).style.display =`flex`;
}

/**
 * Function: Will display the content of a project in div with class = `project-area` using UiService
 * @param projectId
 */
const handleProjectLink =(projectId)=>{
        const project =ProjectService.findProjectById(projectId);
        UiService.displayProject(project);
}

/**
 * Function: Will attach event handlers related to the side menu to the container. Will include the addProject button,
 * home page, and link to each project. Will use the delegate pattern.
 * @param container: is HtmlElement
 */
const initializeEventHandlers =(container)=>{

    container.addEventListener(`click`,(event)=>{
        event.preventDefault();
        switch (event.target.className){
            case `add-project-btn`:
                handleAddProjectBtn();
                break;
            case `project-link`:
                handleProjectLink(Number(event.target.getAttribute(`data-project-id`)));
                break;


        }
    })
}



/**
 *
 * @param container: is required to append the side menu container and then attach the event handlers.
 */
const appendSideMenu = (container) => {

    const sideBarContainer = document.createElement('aside');
    sideBarContainer.className = 'side-bar';

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';
    sideBarContainer.appendChild(projectTitle);

    sideBarContainer.appendChild(NewProjectBtn())
    const unorderedListParent = document.createElement('ul');
    unorderedListParent.className = 'project-list';

    sideBarContainer.appendChild(unorderedListParent);

    container.appendChild(sideBarContainer);
    initializeEventHandlers(sideBarContainer);

}

export default appendSideMenu;