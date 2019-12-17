import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName="pmose"/>
        <UserOutput userName="dmose"/>
      </div>
    );
  }
}

export default App;
