import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';


export const UserContext = createContext();

const App = () => {
  const user = 'PREM';

  return (
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  );
};

export default App;
