import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: "Сходи в магазин", completed: false },
    { id: 2, title: "Посмотри кино", completed: false },
    { id: 3, title: "Посмотри сериал", completed: false },
  ];
  constrictor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  completeTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.complete } : todo
    );
  }
}

export default new Todo();
