import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {

  // state = {
  //   show: true
  // }

  // Test the withErrorHandler componentWillUnmount
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show: false})
  //   }, 5000)
  // }

  render() {
    return (
      <div>
        <Layout>
          {/* {this.state.show ? <BurgerBuilder/> : null}
          <BurgerBuilder/> */}


          <Switch>
            <Route path="/builder"  component={ BurgerBuilder }/>
            <Route path="/checkout"  component={ Checkout } />
            <Route path="/orders" component={ Orders } />
            <Redirect from="/" to="/builder" />
          </Switch>
          
        </Layout>
      </div>
    );
  }
}

export default App;
