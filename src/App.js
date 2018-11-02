import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './store';
import setAuthToken from './setAuthToken';
import { setCurrentUser } from './actions/authentication';
import ProductsList from './productsList/productsList';
import Cart from './cart/cart';
import Delivery from './delivery/delivery';
import Payment from './payment/payment';
import Summary from './summary/summary';
import Login from './login/login';
import Register from './register/register';
import PrivateRoute from './privateRoute';
import './App.sass';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    const products = [
      { id: 0, name: "Jabłka", value: 0, price: 2 },
      { id: 1, name: "Ogórki", value: 0, price: 3 },
      { id: 2, name: "Banany", value: 0, price: 2 },
      { id: 3, name: "Pomarańcze", value: 0, price: 3 },
      { id: 4, name: "Kiwi", value: 0, price: 4 },
      { id: 5, name: "Pomidory", value: 0, price: 3 },
      { id: 6, name: "Granaty", value: 0, price: 3 },
      { id: 7, name: "Sałata", value: 0, price: 2 }
    ]

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Witamy w sklepie</h1>
            <div className="App-links">
              <Link className="App-goProducts" to="/products">Idź do listy produktów</Link>
              <Link className="App-goToCart" to="/cart">Idź do koszyka</Link>
            </div>
          </header>
          <Route exact path="/" render={() => <Redirect to='/products' />} />
          <Route
            exact
            path="/products"
            component={({ location }) => <ProductsList location={location} products={products} />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/cart" component={Cart} auth={this.props.auth.isAuthenticated} />
          <PrivateRoute path="/delivery" component={Delivery} auth={this.props.auth.isAuthenticated} />
          <PrivateRoute path="/payment" component={Payment} auth={this.props.auth.isAuthenticated} />
          <PrivateRoute path="/summary" component={Summary} auth={this.props.auth.isAuthenticated} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
};

export default connect(mapStateToProps)(App);
