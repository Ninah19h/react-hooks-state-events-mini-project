import React, { useState } from "react";

function Task({ text, category, onDeleteTask }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    if (onDeleteTask) {
      onDeleteTask();
    }
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
