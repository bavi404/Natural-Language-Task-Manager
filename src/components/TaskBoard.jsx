import React from 'react';
import './TaskBoard.css';

const TaskBoard = ({ tasks, onEditTask }) => {
  return (
    <section className="task-board-container">
      {tasks.length === 0 && (
        <p className="empty-message">No tasks yet. Start by adding a new one above!</p>
      )}
      <div className="task-list">
        {tasks.map((task, idx) => (
          <article className="task-card" key={idx}>
            <header className="task-card-header">
              <h3 className="task-title">{task.name}</h3>
              <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </header>
            <div className="task-details">
              <p><strong>Assigned To:</strong> {task.assignee}</p>
              <p><strong>Due:</strong> {task.dueDateTime}</p>
            </div>
            <footer className="task-footer">
              <button className="edit-btn" onClick={() => onEditTask(idx)}>Edit</button>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TaskBoard;
