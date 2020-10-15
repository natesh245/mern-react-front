import React from "react";
import "./TodoList.css";

import Todo from "./Todo/Todo";

import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoList.reverse().map((todo) => {
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

  componentDidMount() {
    axios.get("http://localhost:4000/todos/").then((response) => {
      console.log(response.data);
      this.setState({ todoList: response.data });
    });
  }
}

export default TodoList;
