import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import DoneList from "./components/DoneList";
import TodoList from "./components/TodoList";
import "./App.css";

export interface ITodo {
  id: any;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = "", isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;
  }
}

function App() {
  const newTodos = [new Todo("Vue.js 공부"), new Todo("TypeScript 공부")];

  const [todos, setTodos] = useState(newTodos);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div>
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
      <DoneList todos={todos} />
    </div>
  );
}

export default App;
