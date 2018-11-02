import React from 'react';
import './productsList.sass';
import Product from './product/product';

function ProductsList(props) {
  const { products, location } = props,
    productsElems = products ? products.map(function (product, index) {
      return (
        <li className="list-group-item" key={index}>
          <Product product={product} location={location} />
        </li>
      )
    }) : [];

  return (
    <div className="ProductsList list-group">
      <ul>
        {productsElems}
      </ul>
    </div>
  );
}

export default ProductsList;
