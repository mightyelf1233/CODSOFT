import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, currentTask, updateTask, setCurrentTask }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (currentTask.id) {
      setText(currentTask.text);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask.id) {
      updateTask(currentTask.id, text);
      setCurrentTask({ text: "", id: null });
    } else {
      addTask(text);
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add or update a task"
        required
      />
      <button type="submit">{currentTask.id ? "Update" : "Add"}</button>
    </form>
  );
};

export default TaskForm;
