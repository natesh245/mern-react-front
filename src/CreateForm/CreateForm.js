import React from "react";
import "./CreateForm.css";

function CreateForm() {
  return (
    <div className="create-form">
      <h2>Create ToDo</h2>
      <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="desc">Description</label>
        <textarea name="desc" rows="10" cols="50"></textarea>
        <input type="submit" value="create" />
      </form>
    </div>
  );
}

export default CreateForm;
