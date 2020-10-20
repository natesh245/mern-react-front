import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  todoList: [],
  deleteId: 0,

  titleInput: "",
  teaxtArea: "",
  // message: "",
  // showMessage: false,
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_TODO":
      return {
        ...state,

        todoList: action.data,
      };
    case "DELETE_TODO":
      return {
        ...state,
        deleteId: action.deleteId,
      };
    case "CREATE_TODO":
      return {
        ...state,
        titleInput: action.formData.titleInput,
        textArea: action.formData.textArea,
      };

    default:
      return state;
  }
}

export const store = createStore(todoReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
