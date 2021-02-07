import React from "react";
import { v4 as uuid } from "uuid";

export default function TodoList() {
  const todos = [
    {
      id: uuid(),
      description: "Vue.js 공부",
      isDone: true,
    },
    {
      id: uuid(),
      description: "TypeScript 공부",
      isDone: false,
    },
  ];
  return (
    <div id="todo-list">
      <h2>할 일 목록</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isDone} />
              {todo.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
