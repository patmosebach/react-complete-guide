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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
              key = {person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }

    if(this.state.persons.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm Pat the react app</h1>
        <p className={classes.join(' ')} >this is really working</p>
        <button 
        className="button"
        onClick={this.togglePersonsHandler} 
        alt={this.state.showPersons}
        >Show People</button>
        {persons}
      </div>
    );

    //This is what jsx gets compiled into when built.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Pat an App!!!'))
  }
}

export default App;
