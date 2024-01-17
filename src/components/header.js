export default function renderHeader() {
	const header = document.createElement("header");
	header.classList.add("card");
	header.textContent = "To-Do List";

	return header;
}
