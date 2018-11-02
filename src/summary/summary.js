import React, { Component } from 'react';
import moment from 'moment';
import './summary.sass';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <div className="Summary-title">Podsumowanie</div>
        Data wysyłki: {moment().add(3, 'days').format('L')}
      </div>
    );
  }
}

export default Summary;
