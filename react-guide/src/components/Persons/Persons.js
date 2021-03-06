import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons || nextProps.isAuthenticated !== this.props.isAuthenticated){
      return true;
    }else{
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  // componentWillUpdate(){
  //   console.log('[Persons.js] componentWillUpdate');
  // }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // componentWillMount(){
  //   console.log('[Persons.js] componentWillMount');
  // }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age} 
          key = {person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}/>
      );
    });
  }
}

export default Persons;
