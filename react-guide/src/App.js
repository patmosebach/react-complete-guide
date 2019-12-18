import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:4321, name: 'Pat', age: 23 },
      { id:6543, name: 'Adam', age: 31 },
      { id:5432, name: 'Dan', age: 28 }
    ],
    otherState: 'some other stuff',
    showPersons: false
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

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  render() {
    const style = {
      backgroundCoor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key = {person.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
          <h1>Hi, I'm Pat the react app</h1>
          <p>this is really working</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler} >Show People</button>
          {persons}
      </div>
    );

    //This is what jsx gets compiled into when built.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Pat an App!!!'))
  }
}

export default App;
