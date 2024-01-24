import Todo from './todo';

export default function renderModal(todoAddedCallback) {
  const modalDisplay = document.createElement('div');
  modalDisplay.classList.add('modaldisplay');

  const modalCard = document.createElement('div');
  modalCard.classList.add('modalcard');

  const todoForm = document.createElement('form');

  const closeButton = document.createElement('span');
  closeButton.textContent = 'X';
  closeButton.classList.add('close');
  closeButton.addEventListener('click', () => {
    closeModal();
  });

  todoForm.appendChild(closeButton);

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.required = true;

  todoForm.appendChild(titleLabel);
  todoForm.appendChild(titleInput);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.textContent = 'Description:';
  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('id', 'description');
  descriptionInput.required = true;

  todoForm.appendChild(descriptionLabel);
  todoForm.appendChild(descriptionInput);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'duedate');
  dueDateLabel.textContent = 'Due Date:';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'duedate');
  dueDateInput.required = true;

  todoForm.appendChild(dueDateLabel);
  todoForm.appendChild(dueDateInput);

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority');
  priorityLabel.textContent = 'Priority:';

  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'priority');

  const priorities = ['Low', 'Medium', 'High'];
  priorities.forEach((priorityValue) => {
    const option = document.createElement('option');
    option.value = priorityValue.toLowerCase();
    option.text = priorityValue;
    prioritySelect.appendChild(option);
  });

  todoForm.appendChild(priorityLabel);
  todoForm.appendChild(prioritySelect);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submit');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', (e) => {
    const form = todoForm;
    if (form.checkValidity()) {
      e.preventDefault();
      createTodo(todoAddedCallback);
    }
  });

  todoForm.appendChild(submitButton);

  modalCard.appendChild(todoForm);

  modalDisplay.appendChild(modalCard);

  return modalDisplay;
}

function createTodo(todoAddedCallback) {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const dueDate = document.querySelector('#duedate').value;
  const priority = document.querySelector('#priority').value;

  closeModal();

  const newTodo = new Todo(title, description, dueDate, priority);
  console.log(newTodo);

  todoAddedCallback(newTodo);
}

function closeModal() {
  const modalDisplay = document.querySelector('.modaldisplay');
  modalDisplay.remove();
}
