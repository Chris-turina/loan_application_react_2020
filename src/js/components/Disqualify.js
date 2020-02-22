import React from 'react';

const Disqualify = ({ props }) => {
  console.log(props.title);

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.disqualifyMessage}</p>
    </div>

  );
}

export default Disqualify;
