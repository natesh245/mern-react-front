import React from "react";
import "./CreateForm.css";

import axios from "axios";
import { connect } from "react-redux";
import { store } from "./../index";

class CreateForm extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   titleInput: "",
    //   teaxtArea: "",
    //   message: "",
    //   showMessage: false,
    // };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const titleInput = event.target.querySelector("#title").value;
    const textArea = event.target.querySelector("textarea").value;
    console.log(titleInput);
    console.log(textArea);
    const formInputs = { titleInput: titleInput, textArea: textArea };
    // this.setState({ titleInput: titleInput, textArea: textArea });
    store.dispatch({ type: "CREATE_TODO", formData: formInputs });
  }

  render() {
    return (
      <div className="create-form">
        <h2>Create ToDo</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" rows="10" cols="50"></textarea>
          <input type="submit" value="create" />
        </form>
        {this.props.showMessage ? (
          <div className="message">
            {this.props.message}
            <span
              onClick={() => {
                store.dispatch({
                  type: "CLOSE_MESSAGE",
                });
              }}
            >
              x
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.titleInput !== this.props.titleInput ||
      prevProps.textArea !== this.props.textArea
    ) {
      axios
        .post("http://localhost:4000/todos/", {
          title: this.props.titleInput,
          description: this.props.textArea,
        })
        .then((response) => {
          console.log(response.data.message);
          // this.setState({ showMessage: true, message: response.data.message });
          store.dispatch({
            type: "SHOW_MESSAGE",
            message: response.data.message,
          });
        });
    }
  }
}

const mapStateToProps = (state) => ({
  titleInput: state.titleInput,
  textArea: state.textArea,
  message: state.message,
  showMessage: state.showMessage,
});

export default connect(mapStateToProps)(CreateForm);
