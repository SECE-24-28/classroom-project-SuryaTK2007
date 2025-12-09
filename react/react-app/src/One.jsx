import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const One = () => {

  const { name } = useContext(DataContext); 

  return (
    <div>
      <h1>One Component</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default One;