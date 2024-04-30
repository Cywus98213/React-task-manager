import "./App.css";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { useState } from "react";

function App() {
  const [tasks, setNewTask] = useState([]);

  const updateTaskList = (newTask) => {
    setNewTask([...tasks, newTask]);
  };

  const updateAfterDeleteTask = (index) => {
    const newTaskList = tasks.filter(
      (task, selectedIndex) => selectedIndex !== index
    );
    setNewTask(newTaskList);
  };

  return (
    <div className="App">
      <h1 className="appHeader">Task-Manager</h1>
      <AddTaskForm onAddTask={updateTaskList} />
      <div className="appBody">
        {tasks.length > 0 ? (
          <TaskList tasksData={tasks} onDeleteTask={updateAfterDeleteTask} />
        ) : (
          <h2 className="noTaskHeader">No Tasks to Show</h2>
        )}
      </div>
    </div>
  );
}

export default App;
