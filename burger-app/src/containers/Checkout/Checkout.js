import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from '../Contact/Contact';


class Checkout extends Component {

    state = {
        ingredients:{
            meat: 1,
            cheese: 1,
            salad: 1,
            bacon: 1
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()){
            //['salad', '1'],

            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutContinue={this.checkoutContinueHandler}
                    checkoutCancel={this.checkoutCancelHandler} />
                <Route path={this.props.match.path + '/contact'} component={Contact} />
            </div>
        )
    }


};


export default Checkout;