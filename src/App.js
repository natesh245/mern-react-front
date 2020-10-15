import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

import TodoList from "./TodoList/TodoList";

class App extends React.Component {
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
              <Route path="/" component={TodoList} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
