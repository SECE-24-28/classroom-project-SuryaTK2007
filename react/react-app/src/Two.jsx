import React, { useContext } from 'react'
import DataContext from './context/DataContext';

const Two = () => {

  const { name, setName, age, setAge, demo } = useContext(DataContext);

  return (
    <div>
      <h2>Two Component</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Demo says: {demo()}</p>

      <button onClick={() => setName("Surya")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
};

export default Two;
