import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((t, index) => (
        <Task
          key={index}
          text={t.text}
          category={t.category}
          onDeleteTask={() => onDeleteTask(t)}
        />
      ))}
    </div>
  );
}

export default TaskList;
