import React, { useState, useMemo, useCallback } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';
import './styles.css';

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Build a project']);
  const [counter, setCounter] = useState(0);
  const [customTodo, setCustomTodo] = useState('');

  // Add default todo
  const addTodo = useCallback(() => {
    setTodos(prev => [...prev, 'New todo']);
  }, []);

  // Increment counter
  const incrementCounter = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  // Handle custom todo input change
  const handleCustomTodoChange = (e) => {
    setCustomTodo(e.target.value);
  };

  // Add custom todo (must be > 5 characters)
  const addCustomTodo = useCallback(() => {
    if (customTodo.trim().length > 5) {
      setTodos(prev => [...prev, customTodo.trim()]);
      setCustomTodo('');
    }
  }, [customTodo]);

  // Check if custom todo is valid (more than 5 characters)
  const isCustomTodoValid = useMemo(() => {
    return customTodo.trim().length > 5;
  }, [customTodo]);

  // Count total todos (useMemo for optimization)
  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div className="app-container">
      <h1>📋 Task Management with React Memo</h1>
      <p className="subtitle">Using useMemo and React.memo for performance optimization</p>

      <div className="main-grid">
        {/* Left Section - Todos */}
        <div className="section">
          <h2>📝 Task Manager</h2>
          
          <div className="todo-controls">
            <button className="btn btn-primary" onClick={addTodo}>
              Add Todo
            </button>
            <span className="todo-count">Total Tasks: {totalTodos}</span>
          </div>

          <div className="todo-list">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                <span className="todo-index">{index + 1}.</span>
                <span className="todo-text">{todo}</span>
              </div>
            ))}
          </div>

          <div className="custom-todo-section">
            <h3>Add Custom Task</h3>
            <div className="custom-input-group">
              <input
                type="text"
                className="memo-input"
                value={customTodo}
                onChange={handleCustomTodoChange}
                placeholder="Enter custom task (min 6 characters)"
                data-testid="memo-input"
              />
              <button
                className={`btn ${isCustomTodoValid ? 'btn-success' : 'btn-disabled'}`}
                onClick={addCustomTodo}
                disabled={!isCustomTodoValid}
                data-testid="submit-btn"
              >
                Submit
              </button>
            </div>
            {customTodo && !isCustomTodoValid && (
              <p className="validation-error">Task must be more than 5 characters</p>
            )}
          </div>
        </div>

        {/* Right Section - Counter */}
        <div className="section">
          <h2>🔢 Counter</h2>
          <div className="counter-display">
            <span className="counter-value">{counter}</span>
            <button
              className="btn btn-primary"
              onClick={incrementCounter}
              data-testid="increment-btn"
            >
              Increment +
            </button>
          </div>
          
          <div className="performance-info">
            <h3>⚡ Performance Optimizations</h3>
            <div className="info-card">
              <p><strong>useMemo:</strong> Caches total todos count</p>
              <p><strong>React.memo:</strong> Prevents unnecessary re-renders of child components</p>
            </div>
          </div>
        </div>
      </div>

      {/* Child Components */}
      <div className="child-components">
        <UseMemo counter={counter} />
        <ReactMemo todos={todos} />
      </div>
    </div>
  );
}

export default App;
