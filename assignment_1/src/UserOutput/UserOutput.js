import React, {Component} from 'react';
import './UserOutput.css';

class UserOutput extends Component {
    render(){
        return (
            <div className="UserOutput">
                <p>User</p>
                <p>{this.props.userName}</p>
            </div>
        )
    }
}

export default UserOutput;