const Project = (name) => {

    let taskList = [];
    let id;


    //Only works if id is not set yet.
    const setId = (newId) => {
        if (!id) {
            id = newId;
        }
    }

    const getId = () => id;

    const getName = () => name;

    const setName = (newName) => {
        name = newName;
    }

    const getTaskList = () => taskList;

    const addTask = (task) => {
        if (taskList.length === 0) {
            task.setId(0);
        } else {
            task.setId(generateTaskId());
        }
        taskList.push(task);
        return task;
    }

    const findTaskById = taskId =>{
        return taskList.find( t => t.getId()===taskId);
    }

    const generateTaskId = () => {
        return Math.max(...taskList.map(t => t.getId())) + 1;
    }

    const deleteTask = (id) => {
        taskList = taskList.filter(t => t.getId() !== id);
        return taskList;
    }

    const updateProject =(newProjectName)=>{
        name = newProjectName;
    }

    const toString = () => `ID:${id} Name: ${name}, Number of tasks: ${taskList.length}`;

    return {getName, getTaskList, setName, addTask, toString, setId, getId, deleteTask, updateProject, findTaskById};

}

export default Project;