
import React, { useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  };

 
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <span>{count}</span>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
