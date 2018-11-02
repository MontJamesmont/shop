import React from 'react';
import ReactDOM from 'react-dom';
import Delivery from './delivery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Delivery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
