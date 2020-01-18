import React from 'react';
import '../Styles/App.css';

function Tweet({ name, id }) {
  return(
    <div className="Tweet">
      <h2>
        Username: { name }
      </h2>
      <p>
        id: { id }
      </p>
    </div>
  )
}

export default Tweet;