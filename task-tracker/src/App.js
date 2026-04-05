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
  ]);

  //Function to add a new task
  const addTask = (taskText)=> {
    if (!taskText.trim()) return; //dont add empty tasks

    const newTask = {
      id: Date.now(), //simple unique ID
      text: taskText,
      completed: false,
    };

    setTasks([]); // spread old tasks and add new one


  };
//Function to toggle completed status

const toggleTask = (id) => {

  setTasks(tasks.map((task) =>
    task.id === id? {...task, completed: !task.completed} : task
)
  );

};

//Function to delete a task

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id));

};



  return (
      <div className='App'>
           <h1>My Task Tracker</h1>
           <AddTask onAdd={addTask}/>
           <TaskList 
                tasks={tasks} 
                onToggle={toggleTask} 
                onDelete={deleteTask} 
      />

      </div>
  );
}

export default App;
