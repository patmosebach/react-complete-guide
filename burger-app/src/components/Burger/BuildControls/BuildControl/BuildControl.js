import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return(    
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.removeClick} 
                disabled={props.disabled}>less</button>
            <button 
                className={classes.More} 
                onClick={props.addClick}>more</button>
            <div className={classes.Label}>{props.count}</div>
        </div>
    )

};

export default buildControl;