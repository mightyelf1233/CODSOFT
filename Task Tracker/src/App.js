import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({ text: "", id: null });

  const addTask = (task) => {
    setTasks([...tasks, { text: task, id: Date.now(), completed: false }]);
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <TaskForm
        addTask={addTask}
        currentTask={currentTask}
        updateTask={updateTask}
        setCurrentTask={setCurrentTask}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
