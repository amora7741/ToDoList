import renderHeader from "../components/header.js";
import renderTaskListCard from "../components/tasklistcard.js";
import Project from "../components/project.js";
import Todo from "../components/todo.js";
import createTaskList from "../components/tasklist.js";
import renderModal from "../components/modal.js";

export default function renderMain(container) {
	const projectsData = JSON.parse(localStorage.getItem("projects")) || [];
	const currentProjectIndex = localStorage.getItem("currentProjectIndex") || 0;

	let projects = [];

	projectsData.forEach((projectData) => {
		const project = new Project(projectData.name);
		project.tasks = projectData.tasks;
		projects.push(project);
	});

	let currentProject;

	if (projects.length === 0) {
		currentProject = new Project("Default Project");
		projects.push(currentProject);
	} else {
		currentProject = projects[currentProjectIndex];
	}

	container.appendChild(renderHeader(currentProject));
	container.appendChild(
		renderTaskListCard(currentProject, () =>
			saveData(projects, currentProjectIndex)
		)
	);

	const taskCard = document.querySelector("main");

	document.getElementById("addtask").addEventListener("click", () => {
		container.appendChild(renderModal());
		const taskList = document.querySelector(".tasklist");

		//const title = prompt("Enter todo title:");
		if (title) {
			if (taskList) {
				taskList.remove();
			}

			const description = prompt("Enter todo description:");
			const dueDate = prompt("Enter due date (optional):");
			const priority = prompt("Enter priority (Low/Medium/High):");

			const newTodo = new Todo(title, description, dueDate, priority);
			currentProject.addTodo(newTodo);

			taskCard.appendChild(
				createTaskList(currentProject, () =>
					saveData(projects, currentProjectIndex)
				)
			);
			saveData(projects, currentProjectIndex);
		}
	});
}

function saveData(projects, currentProjectIndex) {
	localStorage.setItem("projects", JSON.stringify(projects));
	localStorage.setItem("currentProjectIndex", currentProjectIndex);
}
