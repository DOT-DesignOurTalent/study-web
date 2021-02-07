import React, { useState } from "react";
import { Todo } from "../App";

interface TodoInputProps {
  addTodo: any;
}

export default function TodoInput({ addTodo }: TodoInputProps) {
  const todoObj: Todo = new Todo();

  const [todo, setTodo] = useState(todoObj);

  function submitTodo(event: any) {
    event.preventDefault();
    console.log("todo: ", todo);
    addTodo(todo);
    setTodo(todoObj);
  }

  function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, description: event.target.value });
  }

  return (
    <form id="todo-input" onSubmit={submitTodo}>
      <p>오늘 뭐 할래?</p>
      <input
        type="text"
        name="todo"
        value={todo.description}
        onChange={handleTodoChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
