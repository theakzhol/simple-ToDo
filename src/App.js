import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoDetails from "./Components/TodoDetails/TodoDetails";
import EditTodo from "./Components/EditTodo/EditTodo";
import TodoList from "./Components/TodoList/TodoList";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8000/todo";

  const [todo, setTodo] = useState([]);

  const [oneTask, setOneTask] = useState(null);

  // ? create (post request)
  async function addTodo(newObj) {
    await axios.post(API, newObj);
  }

  // ? read (get request)
  async function getTodo() {
    let result = await axios.get(API);
    setTodo(result.data);
  }

  // ? function for detail
  async function getOneTask(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneTask(result.data);
  }

  // ? function for edit
  async function handeEditTask(id, newTask) {
    await axios.patch(`${API}/${id}`, newTask);
    getTodo();
  }

  // ? function for delete
  async function deleteTask(id) {
    await axios.delete(`${API}/${id}`);
    getTodo();
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <TodoList todo={todo} getTodo={getTodo} getOneTask={getOneTask} />
          }
        />
        <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
        <Route
          path="/edit/:id"
          element={<EditTodo oneTask={oneTask} handeEditTask={handeEditTask} />}
        />
        <Route
          path="/details/:id"
          element={
            <TodoDetails
              getOneTask={getOneTask}
              oneTask={oneTask}
              deleteTask={deleteTask}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
