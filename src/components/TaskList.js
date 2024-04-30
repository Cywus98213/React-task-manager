import "./TaskList.css";
import TaskCard from "./TaskCard";

function TaskList({ tasksData, onDeleteTask }) {
  const handleDeleteTask = (index) => {
    onDeleteTask(index);
  };

  return (
    <div className="taskList">
      <h1 className="taskListHeader">Task List:</h1>
      <div className="taskListContainer">
        {tasksData.map((task, index) => {
          return (
            <TaskCard
              task={task}
              index={index}
              onDeleteTask={handleDeleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
