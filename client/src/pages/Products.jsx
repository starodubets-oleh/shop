import React from 'react';

import ProductsList from '../components/Products';
import QtyProducts from '../components/Products/QtyProducts';

import '../assets/styles/product.scss'

const Products = () => {
  return (
    <>
    <QtyProducts/>
    <ProductsList/>
    </>
  );
};

export default Products;
