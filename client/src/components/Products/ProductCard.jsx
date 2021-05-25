import React from 'react';

import BtnAddToCart from '../Buttons/BtnAddToCard';

const ProductCard = (props) => {

  const { avatar, name, price, description } = props.data;

  return (
    <div className="card">
      <div className="avatar-card">
        <div className="avatar-card-img">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="info-card">
        <div className="title-card">
          {name}
        </div>
        <div className="description-card">
          {description}
        </div>
      </div>
      <div className="price-card">
        {price} &#8364;
      <div className="add-to-cart">
          <BtnAddToCart
            product={props.data}
          >
            add to cart
        </BtnAddToCart>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;