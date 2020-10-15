import React from "react";
import "./TodoList.css";

import Todo from "./Todo/Todo";

function TodoList() {
  return (
    <div className="todo-list">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default TodoList;
