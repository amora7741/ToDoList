export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTodo(todo) {
    this.tasks.push(todo);
  }

  getTodos() {
    return this.tasks;
  }
}
