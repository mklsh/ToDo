import Project from "./project";


let projectList = [];


const getProjectList = () => {
    return projectList;
}

/**
 * Function: Is called when a new project is added using the Add Project Form.
 * @param projectName
 * @returns {{setName: function(*): void, getName: function(): *, updateProject: function(*): void, setId: function(*): void, toString: function(): string, getId: function(): *, getTaskList: function(): [], deleteTask: function(*): *, addTask: function(*=): *}}
 */
const addProject = (projectName) => {

    const newProject = Project(projectName);
    newProject.setId(generateProjectId());
    projectList.push(newProject);
    console.log(`New ProjectListLength = ${projectList.length}`);
    return newProject;

}

/**
 * @param projectId :is used to look for the to be deleted Project
 * @returns {number}: is to know if deletion is successful.
 */
const deleteProject =(projectId)=>{
    projectList = projectList.filter( g => g.getId()!== projectId);
    return projectList.length;
}

/**
 *
 * @param projectId: is to look for the Project where the task should be added.
 * @param newTask: Should be a task object. Created using the Task Factory method.
 * @returns {*}: is to verify the newTask is added. (check for Id)
 */
const addTask = (projectId, newTask) => {
    const project = findProjectById(projectId);
    project.addTask(newTask);
    return newTask;

}

const findProjectById = (projectId) => {
    return projectList.find(p => p.getId() === projectId);
}

/**
 * Function: Will generate an ID number depending on the maximum id of projects.
 * @returns {number}: is the new ID
 */
const generateProjectId = () => {
    return projectList.length>0?Math.max(...projectList.map(g => g.getId()))+1:0;
}


export default {getProjectList, addTask, addProject, findProjectById, deleteProject};