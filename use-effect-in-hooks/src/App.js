import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render
  useEffect(() => {
    // Update the document title with the current count
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
