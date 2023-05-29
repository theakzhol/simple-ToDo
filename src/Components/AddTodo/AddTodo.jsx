import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [descr, setDescr] = useState("");

  function handleValue() {
    let newObj = {
      task,
      descr,
      status: false,
      time: Date.now(),
    };
    addTodo(newObj);
    setTask("");
    setDescr("");
  }

  return (
    <div className="add-form">
      <h2>Add TODO</h2>
      <input
        type="text"
        placeholder="Enter task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description..."
        onChange={(e) => setDescr(e.target.value)}
      />
      <Link to="/" className="link">
        <button className="btn-link" onClick={handleValue}>
          Add
        </button>
      </Link>
      <Link to="/" className="link">
        <button className="btn-link">Cancel</button>
      </Link>
    </div>
  );
};

export default AddTodo;
