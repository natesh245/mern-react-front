import React from "react";
import "./CreateForm.css";

import axios from "axios";

class CreateForm extends React.Component {
  constructor() {
    super();

    this.state = {
      titleInput: "",
      teaxtArea: "",
      message: "",
      showMessage: false,
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
      <div className="create-form">
        <h2>Create ToDo</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" rows="10" cols="50"></textarea>
          <input type="submit" value="create" />
        </form>
        {this.state.showMessage ? (
          <div className="message">{this.state.message}</div>
        ) : null}
      </div>
    );
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
          this.setState({ showMessage: true, message: response.data.message });
        });
    }
  }
}

export default CreateForm;
