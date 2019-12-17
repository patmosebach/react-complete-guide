import React, {Component} from 'react';

class UserOutput extends Component {
    render(){
        return (
            <div>
                <p>{this.props.userName}</p>
                <p>Output 2</p>
            </div>
        )
    }
}

export default UserOutput;