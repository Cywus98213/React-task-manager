import "./TaskCard.css";

function TaskCard({ task, index, onDeleteTask }) {
  const handleDeleteTask = () => {
    onDeleteTask(index);
  };

  return (
    <div className="taskCardContainer">
      <div className="taskCardHeader box">
        <h3>#{index}</h3>
        <button
          className="deleteButton "
          onClick={() => {
            handleDeleteTask(index);
          }}
        >
          Delete
        </button>
      </div>
      <div className="taskCardBody box">
        <h3>Title: {task}</h3>
        <p>Task Description:</p>
        <p>Task Status: Pending</p>
      </div>
    </div>
  );
}

export default TaskCard;
