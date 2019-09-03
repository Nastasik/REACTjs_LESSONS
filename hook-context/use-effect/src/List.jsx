import React, { useEffect, useState } from "react";
import nanoid from "nanoid";

export default function List({handleInfo}) {
  const [names, setNames] = useState([]);
  const [selected, setSelected] = useState([]);
  
  useEffect(() => {
    const fetchNames = async () => {      
        try {
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');          
            let json = await response.json(); 
            setNames({json});           
      
        } catch (error) {
            console.log(error);
        } 
    };
    fetchNames();
  }, []);

  function onSelect(id, name) {
    setSelected(id);
    handleInfo(id, name);    
  }
  
  return (
    <ul className="list">
      {names.json!== undefined && names.json.map(({id, name}) => (        
          <li key={nanoid()}
              onClick={() => onSelect(id, name)}
              className={`${id === selected ? "selected" : ""}`}
          >{name}</li>       
      ))}
    </ul>
  );
}