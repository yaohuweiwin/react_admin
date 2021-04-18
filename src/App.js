import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Admin from "./pages/Admin";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={Admin}>admin</Route>
          <Route path='/login' component={Login}>login</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;