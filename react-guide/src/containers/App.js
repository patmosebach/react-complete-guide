import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxillary from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props){
    super(props);

    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id:4321, name: 'Pat', age: 23 },
      { id:6543, name: 'Adam', age: 31 },
      { id:5432, name: 'Dan', age: 28 }
    ],
    otherState: 'some other stuff',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1 
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.person.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  loginHandler = () => {
    //Set authentication state to true
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}/>
    }

    return (
      <Auxillary className={classes.App}>
        <button 
          onClick={() => {
            this.setState({showCockpit: false});
            }}
        >Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler}}
        >
          {this.state.showCockpit ? (
            <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              />
          ) : null}
          {persons}
        </AuthContext.Provider>

      </Auxillary>
    );

    //This is what jsx gets compiled into when built.
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m Pat an App!!!'))
  }
}

export default withClass(App, classes.App);
