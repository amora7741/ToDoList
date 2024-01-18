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
		li.innerHTML = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
		taskList.appendChild(li);
	});

	taskListCard.appendChild(taskList);

	return taskListCard;
}
