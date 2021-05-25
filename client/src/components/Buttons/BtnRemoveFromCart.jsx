import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { loadRemovePositionFromCard } from '../../redux/action';

const BtnRemoveFromCart = ({ id }) => {

  const dispatch = useDispatch();

  const removeProductFromCart = useCallback(() => dispatch(loadRemovePositionFromCard(id)), [id]);

  return (
    <button
      className="trash-cart-card"
      onClick={removeProductFromCart}
    />
  );
};

export default BtnRemoveFromCart;
