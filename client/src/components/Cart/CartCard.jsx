import React from 'react';
import BtnDec from '../Buttons/BtnDec';
import BtnInc from '../Buttons/BtnInc';

import BtnRemoveFromCart from '../Buttons/BtnRemoveFromCart';

const CartCard = (props) => {

  const { id, avatar, name, totalPrice, description, qty } = props.product;

  return (
    <div className="cart-card">
      <div className="avatar-cart-card">
        <div className="avatar-cart-card-img">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="info-cart-card">
        <div className="title-cart-card">
          {name}
        </div>
        <div className="description-cart-card">
          {description}
        </div>
      </div>
      <div className="qty-price">
        <div className="change-qty-cart-card">
          <div className="dec-qty-cart-card" >
            <BtnDec
              id={id}
            />
          </div>
          <div className="qty-cart-card" >
            {qty}
          </div>
          <div className="inc-qty-cart-card" >
            <BtnInc
              id={id}
            />
          </div>
        </div>
        <div className="price-cart-card">
          {totalPrice} &#8364;
      </div>
      </div>
      <BtnRemoveFromCart
        id={id}
      />
    </div>
  )
};

export default CartCard;