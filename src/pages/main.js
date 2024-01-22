import renderHeader from "../components/header.js";
import renderTaskListCard from "../components/tasklistcard.js";
import Project from "../components/project.js";
import createTaskList from "../components/tasklist.js";
import renderModal from "../components/modal.js";

export default function renderMain(container) {
	function updateTaskList() {
		const taskListCard = document.querySelector(".tasklist");
		if (taskListCard) {
			taskListCard.remove();
		}

		taskCard.appendChild(
			createTaskList(currentProject, () =>
				saveData(projects, currentProjectIndex)
			)
		);
	}

	const projectsData = JSON.parse(localStorage.getItem("projects")) || [];
	let currentProjectIndex = localStorage.getItem("currentProjectIndex") || 0;

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

	container.appendChild(
		renderHeader(
			projects,
			currentProjectIndex,
			(newIndex) => {
				currentProjectIndex = newIndex;
				currentProject = projects[currentProjectIndex];
				updateTaskList();
			},
			(projectName) => {
				const newProject = new Project(projectName);
				projects.push(newProject);
				currentProjectIndex = projects.length - 1;
				currentProject = newProject;
				saveData(projects, currentProjectIndex);
				updateTaskList();
			}
		)
	);
	container.appendChild(
		renderTaskListCard(currentProject, () =>
			saveData(projects, currentProjectIndex)
		)
	);

	const taskCard = document.querySelector("main");

	document.getElementById("addtask").addEventListener("click", () => {
		container.appendChild(
			renderModal((newTodo) => {
				currentProject.addTodo(newTodo);
				updateTaskList();
				saveData(projects, currentProjectIndex);
			})
		);
	});
}

function saveData(projects, currentProjectIndex) {
	localStorage.setItem("projects", JSON.stringify(projects));
	localStorage.setItem("currentProjectIndex", currentProjectIndex);
}
