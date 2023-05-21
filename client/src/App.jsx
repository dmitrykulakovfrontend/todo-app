import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const API_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_URL_DEV_SERVER
  : import.meta.env.VITE_API_URL_PROD_SERVER;

function App() {
  const [todos, setTodos] = useState([]);
  async function fetchData() {
    const response = await fetch(`${API_URL}/todo`);
    const data = await response.json();
    setTodos(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(todos);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id}>{todo.title}</div>
      ))}
    </>
  );
}

export default App;

