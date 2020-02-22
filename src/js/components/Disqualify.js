import React from 'react';

const Disqualify = ({ props }) => {
  
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.disqualifyMessage}</p>
    </div>

  );
}

export default Disqualify;
