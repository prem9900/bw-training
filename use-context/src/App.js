import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';

// Step 1: Create a context
const NumberContext = createContext();

// Step 2: Create a component that provides the context
const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  return (
    <NumberContext.Provider value={{ number, increment }}>
      {children}
    </NumberContext.Provider>
  );
};

// Step 3: Create a component that consumes the context
const DisplayNumber = () => {
  const { number } = useContext(NumberContext);

  return <div>Number: {number}</div>;
};

const IncrementButton = () => {
  const { increment } = useContext(NumberContext);

  return <button onClick={increment}>Increment</button>;
};

// Step 4: Wrap the components that need the context with the Provider
const App = () => {
  return (
    <NumberProvider>
      <div>
        <h1>Counter Example</h1>
        <DisplayNumber />
        <IncrementButton />
      </div>
    </NumberProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
 export default App