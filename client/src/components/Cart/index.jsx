import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTotalPrice } from '../../redux/action';
import { cartList } from '../../redux/selectors';
import CartCard from './CartCard';

const CartList = () => {

  const dispatch = useDispatch();

  const cart = useSelector(cartList);

  useEffect(() => {
    dispatch(loadTotalPrice());
  }, [cart]);

  return (
    <div className="cart-cards">
      {
        cart.map(item => {
          return(
            <CartCard
              key={item.id}
              product={item}
            />
          )
        })
      }
    </div>
  );
};

export default CartList;