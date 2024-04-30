import "./AddTaskForm.css";
import { useState } from "react";

function AddTaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleInputOnChange = (e) => {
    setTask(e.target.value);
  };

  const handleOnSubmit = () => {
    if (task.trim() === "") {
      return;
    } else {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="addTaskform">
      <input
        type="text"
        value={task}
        placeholder="Add Task"
        onChange={handleInputOnChange}
      />
      <button onClick={handleOnSubmit}>Add Task</button>
    </div>
  );
}

export default AddTaskForm;
