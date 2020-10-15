import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Todo;
