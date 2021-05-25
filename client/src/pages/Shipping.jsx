import React from 'react';
import { useSelector } from 'react-redux';

import ShippingSettings from '../components/Shipping';

import { cartList } from '../redux/selectors';

import '../assets/styles/shipping.scss';

const Shipping = () => {

  const cart = useSelector(cartList)

  if (cart.length === 0) {
    return <h1 style={{ textAlign: "center" }}>cart is empty</h1>
  }

  return(
    <ShippingSettings/>
  );
};

export default Shipping;