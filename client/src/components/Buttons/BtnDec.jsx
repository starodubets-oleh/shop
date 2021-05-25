import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChangeQty, loadRemovePositionFromCard } from '../../redux/action';
import {cartList} from '../../redux/selectors';

import minus from '../../assets/img/minus.svg';

const BtnDec = ({id}) => {

  const dispatch = useDispatch();
  const cart = useSelector(cartList);

  const dec = useCallback(()=>dispatch(loadChangeQty({qty: -1, id})), [id])

  useEffect(() => {
    cart.forEach(item => {
      if (item.id === id && item.qty === 0) {
        dispatch(loadRemovePositionFromCard(id))
      } 
    })
  }, [id, cart]);

  return (
    <button
      onClick={dec}
    >
      <img src={minus} alt="dec" />
    </button>
  );
};

export default BtnDec;
