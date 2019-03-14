import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <NavBar></NavBar>
          <Switch>
              <Route path='/' exact={true} component={ProductList} />
              <Route path='/details' component={Details} />
              <Route path='/cart' component={Cart} />
              <Route path='' component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
