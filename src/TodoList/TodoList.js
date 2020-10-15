import React from "react";
import "./TodoList.css";

import Todo from "./Todo/Todo";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todoList.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            key={todo._id}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
