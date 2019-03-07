import React from 'react';
import './User.css'

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Hi my name is: {props.name}</p>
      <p>I am happy</p>
    </div>
  );
}

export default userOutput;
