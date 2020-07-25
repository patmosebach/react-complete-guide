import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.7,
    meat: 1.8,
    bacon: 1.0
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (ingredient) => {
        
        const oldCount = this.state.ingredients[ingredient];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[ingredient] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[ingredient];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
        
        //My personal attemp - NOT IMMUTABLE
        // const ingredients = this.state.ingredients;

        // ingredients[ingredient] = this.state.ingredients[ingredient] + 1;

        // this.setState({
        //     ingredients: ingredients
        // })
    }

    removeIngredientHandler = (ingredient) => {

        const oldCount = this.state.ingredients[ingredient];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[ingredient] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[ingredient];
        const oldPrice = this.state.totalPrice;
        let newPrice = oldPrice - priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);

        //Personal Attemp - NOT IMMUTABLE
        // const ingredients = this.state.ingredients;

        // if(ingredients[ingredient] !== 0)
        // ingredients[ingredient] = this.state.ingredients[ingredient] - 1;

        // this.setState({
        //     ingredients: ingredients
        // })
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Auxil>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <div>Burger Display</div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients}
                                add={this.addIngredientHandler}
                                remove={this.removeIngredientHandler}
                                totalPrice={this.state.totalPrice}
                                disabled={disabledInfo}
                                purchasable={this.state.purchasable}
                                order={this.purchaseHandler}/>
            </Auxil>
        );
    }
}

export default BurgerBuilder;