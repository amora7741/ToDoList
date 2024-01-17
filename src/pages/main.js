import renderHeader from "../components/header";
import renderTaskListCard from "../components/tasklist";

export default function renderMain(container) {
	container.appendChild(renderHeader());
	container.appendChild(renderTaskListCard());
}
