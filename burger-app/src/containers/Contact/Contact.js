import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Contact.css';

class Contact extends Component {

    state = {
        name: '',
        email: '',
        address: {
            stree: '',
            postalCode: ''
        }
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street Address" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }
}

export default Contact;