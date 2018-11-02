import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './payment.sass';

class Payment extends Component {
  constructor(props) {
    super(props)

    this.state = { toPayment: false };

    this.goToSummary = this.goToSummary.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  goToSummary() {
    this.setState({
      toSummary: true
    });
  }

  handleDateChange(newDate) {
    this.setState({
      selectedDate: newDate
    });
  }

  render() {
    if (this.state.toSummary === true) {
      return <Redirect to='/summary' />
    }

    return (
      <div className="Payment">
        <div className="Payment-title">Płatności</div>
        <form>
          <div className="form-group col-7">
            <label htmlFor="ownerCardNumber">Numer karty*</label>
            <input type="number" className="form-control" min="1" id="ownerCardNumber" placeholder="Numer karty" />
          </div>
          <div className="form-group col-7">
            <label htmlFor="ownerName">Imię i nazwisko właściciela*</label>
            <input type="text" className="form-control" id="ownerName" placeholder="Wpisz imię i nazwisko" />
          </div>
          <div className="form-group col-7">
            <label htmlFor="ownerAdres">Data ważności*</label>
            <DatePicker
              selected={this.state.selectedDate}
              onChange={this.handleDateChange}
            />
          </div>
          <div className="form-group col-7">
            <label htmlFor="ownerCVV">CVV*</label>
            <input type="text" className="form-control" min="0" id="ownerCVV" placeholder="CVV" />
          </div>
          <small id="requiredInfo" className="col-7 form-text text-muted Delivery-requiredInfo">* Pole wymagane</small>
          <button type="button" className="btn btn-primary Payment-goToSummary" onClick={this.goToSummary}>Przejdź do podsumowania</button>
        </form>
      </div>
    );
  }
}

export default Payment;
