import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import Tweet from './Tweet';

function Timeline() {
  useEffect(() => getInfo());
  const [items, setItems] = useState([]);
  const getInfo = () => {
    fetch('http://localhost:8080', { method: 'GET' })
      .then((data) => data.json())
      .then((data) => setItems(data))
  }
  return(
    <div className="App">
      <Tweet />
    </div>
  )
}

export default Timeline;
