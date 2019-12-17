import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pat', age: 23 },
      { name: 'Adam', age: 31 },
      { name: 'Dan', age: 28 }
    ],
    otherState: 'some other stuff'
  }

  switchPersonsHandler = (newName) => {
    console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 24  },
        { name: 'Adam', age: 32 },
        { name: 'Dan', age: 28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Pat', age: 24  },
        { name: 'Adam', age: 32 },
        { name: event.target.value, age: 28 }
      ]
    })
  }

  render() {
    const style = {
      backgroundCoor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1>Hi, I'm Pat the react app</h1>
          <p>this is really working</p>
          <button 
          style={style}
          onClick={() => this.switchPersonsHandler('Patrick')} >Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            click={this.switchPersonsHandler.bind(this, 'Patty')}
            changed={this.nameChangedHandler}>My Hobbies: Drinking</Person>
      </div>
    );

    //This is what jsx gets compiled into when built.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Pat an App!!!'))
  }
}

export default App;
