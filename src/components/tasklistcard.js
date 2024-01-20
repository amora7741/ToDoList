import createTaskList from "./tasklist.js";

export default function renderTaskListCard(project, saveDataCallback) {
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

	taskListCard.appendChild(createTaskList(project, saveDataCallback));

	return taskListCard;
}
