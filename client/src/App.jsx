import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_DEV_SERVER
  : import.meta.env.VITE_API_URL_PROD_SERVER;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  async function fetchData() {
    const response = await fetch(`${API_URL}/todo`);
    const data = await response.json();
    setTodos(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(todos);

  function handleChange(e) {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/todo`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTodos([...todos, data.data]);
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          value={newTodo.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="submit">Create todo</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} fetchData={fetchData} />
      ))}
    </>
  );
}

function Todo({ todo, fetchData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState({
    _id: todo._id,
    title: todo.title,
    description: todo.description,
  });
  function handleChange(e) {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  }
  async function handleDelete() {
    const response = await fetch(`${API_URL}/todo/${todo._id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    await fetchData();
    console.log(data);
  }
  async function handleEdit() {
    const response = await fetch(`${API_URL}/todo`, {
      method: "PUT",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setIsEditing(false);
    await fetchData();
  }
  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={newTodo.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <input
          type="text"
          value={newTodo.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="submit" onClick={handleEdit}>
          Save todo
        </button>
      </div>
    );
  }
  return (
    <div>
      {todo.title} <button onClick={handleDelete}>Delete</button>{" "}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default App;

