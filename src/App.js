import logo from './logo.svg';
import './App.css';

import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">ToDo App</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
