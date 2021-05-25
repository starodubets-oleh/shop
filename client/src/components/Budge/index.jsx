import React from 'react';
import { useSelector } from 'react-redux';
import { cartList } from '../../redux/selectors';

const Budge = () => {

  const cart = useSelector(cartList);

  return (
    <div
      className="budge"
    >
      {cart.length}
    </div>
  )
};

export default Budge;