import React from 'react';
import ChildC from './components/ChildC';
import ChildB from './components/ChildB';


const ChildA = () => {
  return (
    <div>
      ChildA
      <ChildB />
      <ChildC />
    </div>
  );
};

export default ChildA;
