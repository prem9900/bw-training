import React, { useContext } from 'react';
import { UserContext } from './App';

const ChildC = () => {
  const user = useContext(UserContext);

  return <div>ChildC {user}</div>;
};

export default ChildC;
