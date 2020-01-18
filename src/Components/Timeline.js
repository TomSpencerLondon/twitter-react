import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Tweet from './Tweet';
import axios from 'axios';

function Timeline() {
  const [items, setItems] = useState({ data: [] });

  useEffect(() => {
   const fetchData = async () => {
     const result = await axios(
       "http://localhost:8080/programmers",
     );
     setItems(result);
   };
   fetchData();
 }, []);

  return(
    <div className="App">
      {items.data.map(item => (
        <Tweet name={item.name}
               id={item.id}
               key={item.id}
        />
      ))}
    </div>
  )
}

export default Timeline;
