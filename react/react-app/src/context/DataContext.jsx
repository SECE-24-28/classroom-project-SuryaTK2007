import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("surya");
  const [age, setAge] = useState(19);
  const demo=()=>{
    return "hello";
  }
  return (
    <DataContext.Provider value={{ name, setName, age, setAge , demo}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
