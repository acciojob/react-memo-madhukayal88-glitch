import React, { useState, useMemo } from 'react';

function UseMemo({ counter }) {
  const [text, setText] = useState('');

  // Expensive calculation with useMemo
  const expensiveCalculation = useMemo(() => {
    console.log('🔄 Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + counter;
  }, [counter]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="use-memo-container">
      <h3>🔄 useMemo Demo</h3>
      <div className="memo-grid">
        <div className="memo-item">
          <p><strong>Counter Value:</strong> {counter}</p>
          <p><strong>Expensive Calculation Result:</strong> {expensiveCalculation}</p>
          <p className="memo-hint">This calculation only runs when counter changes</p>
        </div>
        <div className="memo-item">
          <input
            type="text"
            className="memo-input"
            value={text}
            onChange={handleTextChange}
            placeholder="Type something (doesn't trigger re-calculation)"
          />
          <p className="memo-hint">Typing here doesn't trigger the expensive calculation</p>
        </div>
      </div>
    </div>
  );
}

export default UseMemo;
