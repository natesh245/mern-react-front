import React from "react";
// import axios from "axios";
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
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body-container">
            <Switch>
              <Route path="/create">
                <CreateForm />
              </Route>
              <Route path="/">
                <TodoList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
