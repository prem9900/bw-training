import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Change
      </button>
    </>
  );
}

export default App;
