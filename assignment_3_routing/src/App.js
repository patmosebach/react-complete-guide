import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/courses">Courses</Link></li>
          </ul>

          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/" render={() => <h1>Nothing was found</h1>}/>
          </Switch>
          <Redirect from="/all0courses" to="/courses" />

        </div>
      </BrowserRouter>



    );
  }
}

export default App;
