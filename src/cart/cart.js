import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsList from '../productsList/productsList';
import './cart.sass';

const mapStateToProps = state => ({
  products: state.cart
})

class Cart extends Component {

  render() {
    return (
      <div className="Cart">
        <ProductsList location={this.props.location} products={this.props.products ? this.props.products : []} />
        <Link className="Cart-summary" to="/delivery">Dostawa</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
