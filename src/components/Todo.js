import { observer } from "mobx-react";
import React from "react";
import todo from "../stores/todo";

const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((t) => {
        return (
          <div key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => todo.completeTodo(t.id)}
            />
            {t.title}
            <button onClick={() => todo.removeTodo(t.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
});

export default Todo;
