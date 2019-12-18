import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    users: [
      {userName: "pmose"},
      {userName: "dmose"}
    ]
  }

  userNameHandler = (event) => {
    this.setState({
      users: [
        {userName: event.target.value},
        {userName: "dmose"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput name={this.state.users[0].userName} change={this.userNameHandler}/>
        <UserOutput userName={this.state.users[0].userName} />
        <UserOutput userName={this.state.users[1].userName}/>
        <button onClick={this.userNameHandler.bind(this, 'Patrick')}>Click Me</button>
      </div>
    );
  }
}

export default App;
