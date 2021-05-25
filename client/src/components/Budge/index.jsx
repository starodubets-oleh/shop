import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { cartList } from '../../redux/selectors';

const Budge = () => {

  const cart = useSelector(cartList);

  const [countProductsInCart, setCountProductsInCart] = useState(99);

  useEffect(() => {
    setCountProductsInCart(cart.length)
  }, [cart]);

  return (
    <div
      className="budge"
    >
      {countProductsInCart}
    </div>
  )
};

export default Budge;