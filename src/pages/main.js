import renderHeader from "../components/header.js";
import renderTaskListCard from "../components/tasklist.js";
import Project from "../components/project.js";
import Todo from "../components/todo.js";

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
	container.appendChild(renderTaskListCard(currentProject));

	document.getElementById("addtask").addEventListener("click", () => {
		const title = prompt("Enter todo title:");
		if (title) {
			const description = prompt("Enter todo description:");
			const dueDate = prompt("Enter due date (optional):");
			const priority = prompt("Enter priority (Low/Medium/High):");

			const newTodo = new Todo(title, description, dueDate, priority);
			currentProject.addTodo(newTodo);

			renderTaskListCard(currentProject);
			saveData(projects, currentProjectIndex);
		}
	});
}

function saveData(projects, currentProjectIndex) {
	localStorage.setItem("projects", JSON.stringify(projects));
	localStorage.setItem("currentProjectIndex", currentProjectIndex);
}
