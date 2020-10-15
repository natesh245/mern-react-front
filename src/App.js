import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

import TodoList from "./TodoList/TodoList";

class App extends React.Component {
  state = {
    todoList: [],
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="logo-container">TODO-APP</div>
            <div className="link-container">
              <NavLink to="/" className="nav-links" exact>
                ToDos
              </NavLink>
              <NavLink to="/create" className="nav-links">
                create
              </NavLink>
            </div>
          </header>
          <div className="body-container">
            <Switch>
              <Route path="/create" render={() => <h2>create</h2>} />
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
}

export default App;
