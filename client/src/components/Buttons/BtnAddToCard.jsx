import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {loadAddToCart} from '../../redux/action';
import { cartList } from '../../redux/selectors';

const BtnAddToCart = ({ product, children }) => {

  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(cartList);

  const addToCart = useCallback(() => dispatch(loadAddToCart({...product, qty: 1, totalPrice: Number(product.price)})), [product]);

  useEffect(() => {
    if (cart.some( item => item.id === product.id )) {
      setIsDisable(true);
    }
  }, [cart, product]);

  return (
    <button
      onClick={addToCart}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

export default BtnAddToCart;