import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './delivery.sass';

class Delivery extends Component {
  constructor(props) {
    super(props)

    this.state = { toPayment: false };

    this.goToPayment = this.goToPayment.bind(this);
  }

  goToPayment() {
    this.setState(() => ({
      toPayment: true
    }));
  }

  render() {
    if (this.state.toPayment === true) {
      return <Redirect to='/payment' />
    }

    return (
      <div className="Delivery">
        <div className="Delivery-title">Dostawa</div>
        <form>
          <div className="form-group col-7">
            <label htmlFor="clientName">Imię i nazwisko*</label>
            <input type="text" className="form-control" id="clientName" placeholder="Wpisz imię i nazwisko" />
          </div>
          <div className="form-group col-7">
            <label htmlFor="clientAdres">Adres*</label>
            <input type="text" className="form-control" id="clientAdres" placeholder="Adres" />
          </div>
          <div className="form-group col-7">
            <label htmlFor="clientPhone">Telefon*</label>
            <input type="number" className="form-control" min="1" id="clientPhone" placeholder="Telefon" />
          </div>
          <small id="requiredInfo" className="col-7 form-text text-muted Delivery-requiredInfo">* Pole wymagane</small>
          <button type="button" className="btn btn-primary Delivery-goToPayment" onClick={this.goToPayment}>Przejdź do płatności</button>
        </form>
      </div>
    );
  }
}

export default Delivery;
