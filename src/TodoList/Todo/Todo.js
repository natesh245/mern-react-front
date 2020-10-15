import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="todo">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <button onClick={() => props.deleteHandler(props.todoId)}>Delete</button>
    </div>
  );
}

export default Todo;
