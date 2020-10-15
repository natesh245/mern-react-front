import React from "react";
import "./TodoList.css";

import Todo from "./Todo/Todo";

import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      deleteId: 0,
    };
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler(todoId) {
    console.log(todoId);
    this.setState({ deleteId: todoId });
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoList.reverse().map((todo, index) => {
          return (
            <Todo
              title={todo.title}
              description={todo.description}
              date={todo.created}
              key={todo._id}
              todoId={todo._id}
              deleteHandler={this.deleteHandler}
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deleteId !== this.state.deleteId) {
      axios
        .delete(`http://localhost:4000/todos/${this.state.deleteId}`)
        .then((response) => console.log(response))
        .then(() => {
          axios.get("http://localhost:4000/todos/").then((response) => {
            console.log(response.data);
            this.setState({ todoList: response.data });
          });
        });
    }
  }
}

export default TodoList;
