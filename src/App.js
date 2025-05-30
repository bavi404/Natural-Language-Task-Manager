import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import TaskBoard from './components/TaskBoard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index) => {
    const newName = prompt('Enter new task name:');
    if (newName) {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = newName;
      setTasks(updatedTasks);
    }
  };

  // Load tasks from localStorage when app starts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>Natural Language Task Manager</h1>
      <InputForm onAddTask={addTask} />
      <TaskBoard tasks={tasks} onEditTask={editTask} />
    </div>
  );
}

export default App;
