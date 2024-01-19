export default function renderTaskListCard(project) {
	const taskListCard = document.createElement("main");
	taskListCard.classList.add("card");

	const topHeader = document.createElement("div");
	topHeader.classList.add("topheader");

	const header = document.createElement("h2");
	header.textContent = "Your Tasks";

	const addTaskButton = document.createElement("button");
	addTaskButton.setAttribute("id", "addtask");
	addTaskButton.textContent = "+";

	topHeader.appendChild(header);
	topHeader.appendChild(addTaskButton);

	taskListCard.appendChild(topHeader);

	const lineBreak = document.createElement("hr");
	taskListCard.appendChild(lineBreak);

	const taskList = document.createElement("ul");

	project.getTodos().forEach((todo) => {
		const li = document.createElement("li");
		const topTask = document.createElement("div");
		topTask.classList.add("toptask");
		const text = document.createElement("h3");
		text.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;

		topTask.appendChild(text);

		const arrow = document.createElement("button");
		arrow.classList.add("expand");
		arrow.textContent = "\u25BC";

		arrow.addEventListener("click", () => {
			const description = document.createElement("p");
			description.classList.add("todo-description");
			description.textContent = `Description: ${todo.description}	`;

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

	taskListCard.appendChild(taskList);

	return taskListCard;
}
