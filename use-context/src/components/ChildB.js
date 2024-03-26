import React, { useContext } from 'react';
import { UserContext } from './App';

const ChildB = () => {
  const user = useContext(UserContext);

  return <div>ChildB {user}</div>;
};

export default ChildB;
