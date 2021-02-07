import React from "react";
import { v4 as uuid } from "uuid";

export default function DoneList() {
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
      <h2>끝낸 것들</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isDone} disabled />
              {todo.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
