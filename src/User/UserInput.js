import React from 'react';
import './User.css'

const userInput = (props) => {
  return (
    <div className="userInput">
      <input type="text" value={props.name} onChange={props.input} />
    </div>
  );
}

export default userInput;
