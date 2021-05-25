import React from 'react';
import { useSelector } from 'react-redux';

import CartList from '../components/Cart';
import BtnBuy from '../components/Buttons/BtnBuy';

import { cartList, totalPrice } from '../redux/selectors';

import '../assets/styles/cart.scss';

const Cart = () => {

  const cart = useSelector(cartList);
  const priceToBuy = useSelector(totalPrice);

  if (cart.length === 0) {
    return <h1 style={{ textAlign: "center" }}>cart is empty</h1>
  }

  return (
    <div className="cart">
      <CartList />
      <div className="buy-box">
        <div className="total-price">
        {priceToBuy} &#8364;
        </div>
        <div className="btn-buy">
          <BtnBuy>
            buy
          </BtnBuy>
        </div>
      </div>
    </div>
  );
};

export default Cart;