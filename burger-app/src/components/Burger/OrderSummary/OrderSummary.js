import React, { Component } from 'react';
import Auxil from '../../../hoc/Auxil/Auxil';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This could be a functional component. Added componentWillUpdate for 154. debugging
    componentWillUpdate(){
        console.log('[OrderSummary] will update')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igKey, i) => {
            if(this.props.ingredients[igKey] > 0){
                return <li key={i}>
                            <span style={{textTransform: 'capitalize'}}>
                                {igKey}
                            </span>: 
                            {this.props.ingredients[igKey]}
                        </li>
            }
        });

        return (
            <Auxil>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul> 
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.cancel} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
            </Auxil>
        );
    }
}

export default OrderSummary;