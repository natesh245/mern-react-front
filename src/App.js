import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  // NavLink,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

import Header from "./header/Header";
import TodoList from "./TodoList/TodoList";
import CreateForm from "./CreateForm/CreateForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      titleInput: "",
      teaxtArea: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const titleInput = event.target.querySelector("#title").value;
    const textArea = event.target.querySelector("textarea").value;
    console.log(titleInput);
    console.log(textArea);
    this.setState({ titleInput: titleInput, textArea: textArea });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-container">
            <Switch>
              <Route path="/create">
                <CreateForm submitHandler={this.submitHandler} />
              </Route>
              <Route path="/">
                <TodoList todoList={this.state.todoList} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:4000/todos/").then((response) => {
      console.log(response.data);
      this.setState({ todoList: response.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.titleInput !== this.state.titleInput ||
      prevState.textArea !== this.state.textArea
    ) {
      axios
        .post("http://localhost:4000/todos/", {
          title: this.state.titleInput,
          description: this.state.textArea,
        })
        .then((response) => {
          console.log(response);
        });
    }
    //  else if (prevState.todoList !== this.state.todoList) {
    //   axios.get("http://localhost:4000/todos/").then((response) => {
    //     console.log(response.data);
    //     this.setState({ todoList: response.data });
    //   });
    // }
  }
}

export default App;
