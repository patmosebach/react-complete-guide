import React, {Component} from 'react';
import './UserInput.css';

class UserInput extends Component {
    render(){
        return (
            <div className="UserInput"> 
                <input type="text" onChange={this.props.change} value={this.props.name}></input>
            </div>
        )
    }
}

export default UserInput;