import React from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: any;
}

export default function TodoList({ todos, setTodos }: TodoListProps) {
  const todoInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  function updateCheckedItem(todo: Todo) {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;

    setTodos([...todos]);
  }
  return (
    <div id="todo-list">
      <h2>할 일 목록</h2>
      <ul>
        {todoInProgress.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.isDone}
                onChange={(e) => {
                  updateCheckedItem(todo);
                }}
              />
              {todo.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
