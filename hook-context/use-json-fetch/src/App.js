import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';

function useJsonFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);   
                if (!response.ok) throw new Error(response.statusText);           
                const data = await response.json();                              
                setData(data);
                setError(null);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    
    return [data, loading, error];
}

function Update({ url }) {
  const [data, loading, error] = useJsonFetch(url);
  return (
      <div className='App'>
          <h1 className='ok'>{data && data.status}</h1>
          <h1 className='load'>{loading && 'Is Loading'}</h1>
          <h1 className='error'>{error && 'Error!'}</h1>
      </div>
  );
}

export default function App() {
  return (
      <div>
          <Update url="http://localhost:7070/data"/>         
          <Update url="http://localhost:7070/error"/>          
          <Update url="http://localhost:7070/loading"/>          
      </div>
  );
}