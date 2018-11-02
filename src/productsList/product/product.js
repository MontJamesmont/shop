import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../actions'
import './product.sass';

const mapStateToProps = state => ({
  cart: state.cart
})

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.product.value };
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  isDisabled() {
    return this.state.value <= 0 || this.props.cart.length >= 3
  }

  addToCart() {
    if (!this.isDisabled()) {
      const price = this.props.product.price * this.state.value;
      this.props.dispatch(addProductToCart(this.props.product.name, this.state.value, price));
    }
  }

  showValueAndButton(elem) {
    if (this.props.location.pathname.indexOf('products') >= 0) {
      return (
        <span>
          <span className="product-count">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Ilość"
                aria-label="Ilość"
                aria-describedby="basic-addon2"
                value={this.state.value}
                min="0"
                onChange={this.handleChange} />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">kg</span>
              </div>
            </div>
          </span>
          <span className="product-addToCart">
            <button
              type="button"
              className={'btn btn-' + (this.isDisabled() ? 'light' : 'primary')}
              disabled={this.isDisabled()}
              onClick={this.addToCart}>
              Dodaj do koszyka
            </button>
          </span>
        </span>
      );
    }
  }

  render() {
    return (
      <div className="product">
        <span className="product-name">{this.props.product.name}</span>
        {this.showValueAndButton()}
        <span className="product-price">
          Cena: {this.props.product.price}
        </span>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Product);
