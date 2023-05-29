import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const TodoDetails = ({ getOneTask, oneTask, deleteTask }) => {
  const { id } = useParams();

  useEffect(() => {
    getOneTask(id);
  }, []);

  return (
    <div className="todo-details">
      <h1>Your TODO</h1>
      <h2>{oneTask && oneTask.task}</h2>
      <input type="checkbox" className="checkbox" />
      <div className="text">
        <p>{oneTask && oneTask.descr}</p>
      </div>
      <div className="task-btn">
        <Link to={`/edit/` + id}>
          <button className="btn-link">Edit</button>
        </Link>
        <Link to="/">
          <button className="btn-link" onClick={() => deleteTask(id)}>
            Delete
          </button>
        </Link>
        <Link to="/">
          <button className="btn-link">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default TodoDetails;
