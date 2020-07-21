import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 4
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
        })
        
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
        })

        //Personal Attemp - NOT IMMUTABLE
        // const ingredients = this.state.ingredients;

        // if(ingredients[ingredient] !== 0)
        // ingredients[ingredient] = this.state.ingredients[ingredient] - 1;

        // this.setState({
        //     ingredients: ingredients
        // })
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
                <div>Burger Display</div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredients={this.state.ingredients}
                                add={this.addIngredientHandler}
                                remove={this.removeIngredientHandler}
                                totalPrice={this.state.totalPrice}
                                disabled={disabledInfo}/>
            </Auxil>
        );
    }
}

export default BurgerBuilder;