import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxillary from '../../../hoc/Auxillary';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');

        return (
            //<div className={classes.Person}>
            //[
            <Auxillary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}
                <p key={1} onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>,
                <p key={2} >{this.props.children}</p>,
                <input 
                    key={3} 
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxillary>
            //]
                //</div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    changed: PropTypes.func,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);