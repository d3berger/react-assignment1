import React, { Component } from 'react';
import './App.css';
import './User/User.css'

const UserInput = (props) => {
  return (
    <div className="userInput">
      <input type="text" value={props.name} onChange={props.input} />
    </div>
  );
}

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Hi my name is: {props.name}</p>
      <p>I am happy</p>
    </div>
  );
}

class App extends Component {
  state = {
    username: "Quill"
  };
  
  inputHandler = (event) => {
   this.setState({
       username: event.target.value
   });
  };
  
  render() {
    const style = {
        backgroundColor: "yellow",
        border: "1px solid blue",
        padding: "20px"
    };
    return (
      <div style={style}>
        <UserOutput name="Siera" />
        <UserInput name={this.state.username} input={this.inputHandler} />
        <UserOutput name={this.state.username} />
      </div>
    );
  };
}

export default App;
