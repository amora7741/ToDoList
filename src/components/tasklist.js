export default function createTaskList(project, saveDataCallback) {
	const taskList = document.createElement("ul");
	taskList.classList.add("tasklist");

	project.getTodos().forEach((todo) => {
		const li = document.createElement("li");
		const topTask = document.createElement("div");
		topTask.classList.add("toptask");

		const container = document.createElement("div");
		container.classList.add("checktask");

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = todo.completed;

		checkbox.addEventListener("click", () => {
			todo.completed = checkbox.checked;

			text.style.textDecoration = todo.completed ? "line-through" : "none";
			saveDataCallback();
		});

		container.appendChild(checkbox);

		const text = document.createElement("h3");
		text.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;

		text.style.textDecoration = todo.completed ? "line-through" : "none";

		container.appendChild(text);

		topTask.appendChild(container);

		const arrow = document.createElement("button");
		arrow.classList.add("expand");
		arrow.textContent = "\u25BC";

		arrow.addEventListener("click", () => {
			const description = document.createElement("p");
			description.classList.add("todo-description");
			description.textContent = `Description: ${todo.description}`;

			const existingDescription = li.querySelector(".todo-description");

			if (existingDescription) {
				li.removeChild(existingDescription);
			} else {
				li.appendChild(description);
			}
		});

		topTask.appendChild(arrow);
		li.appendChild(topTask);

		taskList.appendChild(li);
	});

	return taskList;
}
