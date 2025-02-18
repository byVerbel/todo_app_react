import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

import { get_to_dos } from "./api/endpoints";

import ToDoList from './components/ToDoList';

function App() {

  const [to_dos, setToDos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
        const to_dos = await get_to_dos();
        setToDos(to_dos);
    }
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">ToDo App</h1>
        <ToDoList to_dos={to_dos} />
      </div>
    </div>
  );
}

export default App;
