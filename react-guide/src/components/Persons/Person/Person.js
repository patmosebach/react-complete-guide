import React, {Component} from 'react';
import './Person.css';
import classes from './Person.css';
import Auxillary from '../../../hoc/Auxillary';

class Person extends Component{

    render(){
        console.log('[Person.js] rendering...');

        return (
            //<div className={classes.Person}>
            //[
            <Auxillary>
                <p key={1} onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>,
                <p key={2} >{this.props.children}</p>,
                <input key={3} type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxillary>
            //]
                //</div>
        )
    }
}

export default Person;