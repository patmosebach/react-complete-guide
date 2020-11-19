import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.6,
    cheese: 0.7,
    meat: 1.8,
    bacon: 1.0
}

class BurgerBuilder extends Component {

    state = {
        ingredients:null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
    }

    componentDidMount(){

        axios.get('/ingredients.json')
            .then(res => {
                this.setState({ingredients: res.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
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

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {

        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Pat',
                address: {
                    stree: 'Teststreet',
                    zipCode: '60561',
                    country: 'US'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false});
            });
    }
    
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;

        if(this.state.ingredients){

            orderSummary = <OrderSummary ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler} price={this.state.totalPrice} continue={this.purchaseContinueHandler}/>;

            burger = <Auxil>
                        <Burger ingredients={this.state.ingredients}/>
                        <BuildControls ingredients={this.state.ingredients}
                            add={this.addIngredientHandler}
                            remove={this.removeIngredientHandler}
                            totalPrice={this.state.totalPrice}
                            disabled={disabledInfo}
                            purchasable={this.state.purchasable}
                            order={this.purchaseHandler}/>
                    </Auxil>;
        }

        if(this.state.loadingOrders){
            orderSummary = <Spinner/>;
        }

        return(
            <Auxil>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
                
            </Auxil>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);