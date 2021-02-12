import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Contact.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';


class Contact extends Component {

    state = {
        orderForm: {            
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },                
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Sreet Address'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },                
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },            
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {}
            }
        },
        formValid: false,
        loading: false
    }

    orderHandler = (event) => {
        //Prevents opening of new tab on submit
        event.preventDefault();

        this.setState({loading: true});

        //Extract data from state
        const formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData

        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    inputValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '';
        }

        if(rules.maxLength){
            isValid = (value.trim().length <= rules.maxLength) && isValid;
        }

        if(rules.minLength){
            isValid = (value.trim().length >= rules.minLength) && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, id) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[id]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.inputValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[id] = updatedFormElement;

        let formIsValid = true;
        for(let id in updatedOrderForm){
            if(updatedOrderForm[id].validation)
                formIsValid = updatedOrderForm[id].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formValid: formIsValid});
    }

    render(){
        
        const formElementsArray = [];

        for(var key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let inputs = 
            formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value} 
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}/>
                ));
        

        let form =(            
                
                <form onSubmit={this.orderHandler}>
                    {inputs}
                    <Button btnType="Success" disabled={!this.state.formValid} clicked={this.orderHandler}>ORDER</Button>
                    
                </form>
            
        );

        if(this.state.loading){
            form = <Spinner />;
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default Contact;