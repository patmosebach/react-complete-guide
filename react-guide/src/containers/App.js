import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );

    //This is what jsx gets compiled into when built.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Pat an App!!!'))
  }
}

export default App;
