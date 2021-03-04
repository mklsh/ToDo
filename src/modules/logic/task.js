const Task = (description, elapsedTime, dueDate, projectId) => {

    let Done = false;
    let id;

    const getId = () => id;

    //Only works if id is not set yet.
    const setId = (newId) => {
        if (!id) {
            id = newId;
        }
    }

    const getDescription = () => description;
    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const getElapsedTime = () => elapsedTime;
    const setElapsedTime = (newTime) => {
        elapsedTime = newTime
    }

    const getDueDate = () => dueDate;
    const setDueDate = (newDate) => {
        dueDate = newDate;
    }

    const isDone = () => Done;
    const markAsDone = () => {
        Done = true;
    }
    const markAsUndone = () => {
        Done = false;
    }

    const getProjectId = () => projectId;

    const toString = () => `Description: ${description} Elapsed Time: ${elapsedTime} ${dueDate}`;


    return {
        getDescription, getElapsedTime,
        getDueDate, isDone, markAsDone, markAsUndone,
        setDescription, setDueDate, setElapsedTime, toString,
        getId, setId, getProjectId
    };

}

export default Task;