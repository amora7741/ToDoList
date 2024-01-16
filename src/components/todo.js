export default class Todo {
	constructor(title, description, dueDate = "No due date", priority = 1) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
	}
}
