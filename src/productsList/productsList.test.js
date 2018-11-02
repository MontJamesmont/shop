import React from 'react';
import ReactDOM from 'react-dom';
import ProductsList from './productsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
