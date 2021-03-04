const createBtn = (projectId, taskId, btnClassName, btnText) => {
    const btn = document.createElement('button');
    btn.className = btnClassName;
    btn.setAttribute(`aria-label`, btnText);
    btn.setAttribute(`data-task-id`, taskId);
    btn.setAttribute(`data-project-id`, projectId);
    return btn;
}


const appendTaskFooter = (task, taskContainer) => {


    const taskDueDate = document.createElement('p');
    taskDueDate.innerText = task.getDueDate();
    taskDueDate.className = `due-date`;

    const taskElapsedTime = document.createElement('p');
    taskElapsedTime.innerText = `${task.getElapsedTime()} hours`;
    taskElapsedTime.className = `elapsed-time`;

    taskContainer.append(taskDueDate, taskElapsedTime);


}

const taskToHtml = (task) => {

    const taskContainer = document.createElement(`div`);
    taskContainer.className = `task-container`;
    taskContainer.setAttribute(`data-task-id`, task.getId());

    const doneBtn = createBtn(task.getProjectId(), task.getId(), `done-task-btn`, `Done`);
    doneBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`
    if (task.isDone()) {
        doneBtn.setAttribute(`data-is-done`, "true");
    }
    const taskTextContent = document.createElement('div');
    taskTextContent.className = 'task-text';
    const taskDescription = document.createElement(`p`);
    taskDescription.innerText = task.getDescription();
    taskDescription.className = `task-description`;

    const taskTimeContainer = document.createElement('div');
    taskTimeContainer.className = `task-time-container`;
    appendTaskFooter(task, taskTimeContainer);

    taskTextContent.append(taskDescription, taskTimeContainer);
    const deleteBtn = createBtn(task.getProjectId(), task.getId(), `delete-task-btn`, `Delete`);
    deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>`;
    taskContainer.append(doneBtn, taskTextContent, deleteBtn)

    return taskContainer

}

export default taskToHtml;