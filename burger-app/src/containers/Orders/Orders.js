import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import classes from './Orders.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state={
        orders: [],
        loading: true
    }

    componentDidMount(){

        axios.get('/orders.json')
            .then(res => {
                console.log(res.data);
                let fetchedOrders = [];

                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({loading: false, orders: fetchedOrders})
            })
            .catch(error => {
                this.setState({error: true, loading: false});
            });
    }

    render(){

        let orders = null;

        if(this.state.orders){
            orders = this.state.orders.map(order => {
                return <Order 
                        key={order.id} 
                        name={order.customer.name} 
                        ingredients={order.ingredients} />
            });
        }else{
            orders = <Spinner/>;
        }


        return(
            <div className={classes.Orders}>
                <h1 className={classes.OrdersHeader}>Orders</h1>
                {orders}
            </div>


        )
    }
}

export default withErrorHandler(Orders, axios);