import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditTodo = ({ oneTask, handeEditTask }) => {
  const [task, setTask] = useState("");
  const [descr, setDescr] = useState("");

  useEffect(() => {
    if (oneTask) {
      setTask(oneTask.task);
      setDescr(oneTask.descr);
    }
  }, [oneTask]);

  async function handleSave() {
    let newTask = {
      task,
      descr,
      status: false,
      time: Date.now(),
    };
    handeEditTask(oneTask.id, newTask);
  }

  return (
    <div className="add-form">
      <h2>Edit TODO</h2>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description..."
        className="edit-inp"
        value={descr}
        onChange={(e) => setDescr(e.target.value)}
      />
      <Link to="/">
        <button className="btn-link" onClick={handleSave}>
          Save
        </button>
      </Link>
      <Link to="/">
        <button className="btn-link">Cancel</button>
      </Link>
    </div>
  );
};

export default EditTodo;
