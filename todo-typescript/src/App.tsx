import React from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import DoneList from "./components/DoneList";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList />
      <DoneList />
    </div>
  );
}

export default App;
