import React from 'react';
import Auxil from '../../../hoc/Auxil';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey, i) => {
            if(props.ingredients[igKey] > 0){
                return <li key={i}>
                            <span style={{textTransform: 'capitalize'}}>
                                {igKey}
                            </span>: 
                            {props.ingredients[igKey]}
                        </li>
            }
        });

    // <li>cheese: 4</li>

    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul> 
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancel} btnType="Danger">CANCEL</Button>
            <Button btnType="Success">CONTINUE</Button>
        </Auxil>
    )
};

export default orderSummary;