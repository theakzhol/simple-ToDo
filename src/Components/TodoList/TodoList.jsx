import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = ({ getTodo, todo }) => {
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todo-list">
      <h1>Your TODO List</h1>
      <div className="card-list">
        {todo.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.task}</h2>
            <p>{item.descr}</p>
            <Link to={`/details/` + item.id}>
              <button className="btn-link">more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
