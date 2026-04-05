//src/App.js
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  //Our tasks live here - this is the 'source of truth'
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Learn React useState', completed: false},
    {id: 2, text: 'Build first project', completed: false},
    {id: 3, text: 'Show chat i did it', completed: true},
  ])
  return (
    
  );
}

export default App;
