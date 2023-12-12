import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const { addTodoAction, state } = useContext(TodoContext);
  console.log(state);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") return alert("please provide details");
    addTodoAction(title);
    setTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange}></input>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
