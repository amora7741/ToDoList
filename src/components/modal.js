import Todo from "./todo";

export default function renderModal() {
	const modalDisplay = document.createElement("div");
	modalDisplay.classList.add("modaldisplay");

	const modalCard = document.createElement("div");
	modalCard.classList.add("modalcard");

	const todoForm = document.createElement("form");

	const closeButton = document.createElement("span");
	closeButton.textContent = "X";
	closeButton.classList.add("close");
	closeButton.addEventListener("click", () => {
		closeModal();
	});

	todoForm.appendChild(closeButton);

	modalCard.appendChild(todoForm);

	modalDisplay.appendChild(modalCard);

	return modalDisplay;
}

function createTodo() {
	const title = document.querySelector("#title").value;
	const description = document.querySelector("#description").value;
	const dueDate = document.querySelector("#duedate");
	const priority = document.querySelector("#priority");

	closeModal();

	return new Todo(title, description, dueDate, priority);
}

function closeModal() {
	const modalDisplay = document.querySelector(".modaldisplay");
	modalDisplay.remove();
}
