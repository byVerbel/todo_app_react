import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { get_to_dos, post_to_do } from "./api/endpoints";

import ToDoList from './components/ToDoList';
import AddToDo from "./components/AddToDo";

function App() {

  const [to_dos, setToDos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const to_dos = await get_to_dos();
      setToDos(to_dos);
    }
    fetchTodos();
  }, []);

  const addToDo = async (name) => {
    post_to_do(name);
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">ToDo App</h1>
        <AddToDo addToDo={addToDo} />
        <ToDoList to_dos={to_dos} />
      </div>
    </div>
  );
}

export default App;
