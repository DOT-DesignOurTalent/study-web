import React from "react";
import { Todo } from "../App";

interface DoneListProps {
  todos: Todo[];
}

export default function DoneList({ todos }: DoneListProps) {
  const todosDone = todos.filter((todo) => {
    return todo.isDone;
  });

  return (
    <div id="todo-list">
      <h2>끝낸 것들</h2>
      <ul>
        {todosDone.map((todo) => {
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
