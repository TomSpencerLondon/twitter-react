import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Tweet from './Tweet';

function Timeline() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("http://localhost:8080/programmers");
    const data = await response.json();
    setItems(data);
  }


  return(
    <div className="App">
      {
        items.map(item => (
        <Tweet name={item.name}
               id={item.id}
               key={item.id}
        />
      ))}
    </div>
  )
}

export default Timeline;
