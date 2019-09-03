import React, { useEffect, useState } from "react";
import nanoid from "nanoid";

export default function Details({ info }) {
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!info.id) return;   

      const fetchData = async () => {      
          try {         
              const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + info.id + ".json");           
              let json = await response.json();             
              setData({json});

          } catch (error) {
              console.log(error);
          } 
      }
      fetchData();

  }, [info.id]);  

  return ( 
      <div className="details">
          {data.json !== undefined &&
              <>
                <div className="avatar">
                    <img key={nanoid()} className="image" src={data.json.avatar} alt="avatar"/>
                </div>                  
                <div className="name">{data.json.name}</div>
              </>}
          {data.json !== undefined && Object.keys(data.json.details).map(item => (
              <div key={nanoid()}>
                  {item}: {data.json.details[item]}{" "}
              </div>
          ))}
      </div>    
  );
}