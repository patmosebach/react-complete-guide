import React from 'react';

const validationComponent = (props) => {
    let message = '';
    if(props.length > 5){
        message = "String too long";
    }else{
        message = "String too short"
    }

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default validationComponent;