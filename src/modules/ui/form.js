const Form = (formName, parentContainer) => {

    let formHtml;

    (() => {
        const formParentContainer = document.createElement('div');
        formParentContainer.className = 'form-wrapper'
        formParentContainer.id = `${formName}-form-wrapper`;

        const form = document.createElement('div');
        form.className = 'form-container';
        form.id = `${formName}-container`;

        const formTitleWrapper = document.createElement('div');
        formTitleWrapper.className = `form-title-container`
        formTitleWrapper.id = `${formName}-title-container`;
        form.appendChild(formTitleWrapper);

        const formInputElementContainer = document.createElement('form');
        formInputElementContainer.className = `form-input-container`;
        formInputElementContainer.id = `${formName}-input-container`;
        form.appendChild(formInputElementContainer);

        const formBtnContainer = document.createElement('div');
        formBtnContainer.className = `form-btn-container`;
        formBtnContainer.id = `${formName}-btn-container`;
        form.appendChild(formBtnContainer);
        formParentContainer.appendChild(form);
        document.querySelector(parentContainer).appendChild(formParentContainer);
        formHtml = form;

    })();

    const getHtmlElement = () => formHtml;

    const setTitle = (title) => {
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        document.getElementById(`${formName}-title-container`).appendChild(titleElement);
    }

    const addButton = (btnName) => {
        const btn = document.createElement('button');
        btn.id = `${formName}-${btnName}-btn`;
        btn.className = `form-btn`;
        btn.textContent = btnName;
        document.getElementById(`${formName}-btn-container`).appendChild(btn);
    }

    const addInputField = (fieldName, label, type) => {

        const inputField = document.createElement('input');
        inputField.className = 'form-input';
        inputField.id = `${fieldName}-form-input`;
        inputField.type = type;
        inputField.value = '';

        const labelElement = document.createElement('label');
        labelElement.for = `${fieldName}-form-input`;
        labelElement.textContent = label;
        document.getElementById(`${formName}-input-container`).append(labelElement, inputField);
   }

    return {getHtmlElement, setTitle,addButton, addInputField};
}


export default Form;