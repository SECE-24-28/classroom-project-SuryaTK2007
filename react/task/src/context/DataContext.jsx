import React, { createContext, useState } from 'react'

const DataContext=createContext();


export const DataProvider = ({children}) => {
    const [list, setList]=useState([{id:1,name:"surya",fee:false},{id:2, name:"yaazh",fee:false}])
    const handleDelete=(id)=>{
    const newList=list.filter((li)=>li.id!=id)
    setList(newList)
    }
    const handleCheck=(id)=>{
        const newList=list.map((li)=>
        li.id===id?{...li, fee:!li.fee}:li
        );
        setList(newList);
        const updated=newList.find((li)=>
        li.id==id
    )
        console.log(updated.name, updated.fee)
    }
  return (
    <DataContext.Provider value={{list, setList, handleDelete, handleCheck}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext
