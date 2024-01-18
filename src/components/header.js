export default function renderHeader(project) {
	const header = document.createElement("header");
	header.classList.add("card");
	const title = document.createElement("h1");
	title.textContent = "To-Do List";

	header.appendChild(title);

	const projectName = document.createElement("h4");
	projectName.textContent = `${project.name}`;

	header.appendChild(projectName);

	return header;
}
