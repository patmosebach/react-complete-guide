import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from '../Contact/Contact';


class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()){
            //['salad', '1'],
            if(param[0] === 'price') {
                this.setState({totalPrice: Number.parseFloat(param[1]).toFixed(2)});
            }
            else{
                ingredients[param[0]] = +param[1];
            }
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
                    <div>total price: {this.state.totalPrice}</div>
                <Route 
                    path={this.props.match.path + '/contact'} 
                    render={() => (<Contact ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props}/>)} />
            </div>
        )
    }


};


export default Checkout;