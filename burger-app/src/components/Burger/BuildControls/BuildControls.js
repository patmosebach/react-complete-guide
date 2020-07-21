import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current Price <strong>${props.totalPrice.toFixed(2)}</strong></p>
            {Object.keys(props.ingredients).map((igKey, index) => {
                return <BuildControl 
                                    key={index}
                                    label={igKey} 
                                    count={props.ingredients[igKey]}
                                    addClick={() => props.add(igKey)}
                                    removeClick={() => props.remove(igKey)}
                                    disabled={props.disabled[igKey]}
                        />
            })}
        </div>
    )

};

export default buildControls;