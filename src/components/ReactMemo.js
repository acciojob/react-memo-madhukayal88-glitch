import React from 'react';

const ReactMemo = React.memo(({ todos }) => {
  console.log('🎯 ReactMemo component rendered');

  return (
    <div className="react-memo-container">
      <h3>⚡ React.memo Demo</h3>
      <p className="memo-info">This component only re-renders when todos change</p>
      <div className="todo-stats">
        <div className="stat-item">
          <span className="stat-label">Total Todos:</span>
          <span className="stat-value">{todos.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">First Todo:</span>
          <span className="stat-value">{todos[0] || 'None'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Last Todo:</span>
          <span className="stat-value">{todos[todos.length - 1] || 'None'}</span>
        </div>
      </div>
      <div className="memo-note">
        <p>📌 Check the console to see when this component re-renders</p>
        <p className="memo-hint">It only re-renders when the todos array changes</p>
      </div>
    </div>
  );
});

export default ReactMemo;
