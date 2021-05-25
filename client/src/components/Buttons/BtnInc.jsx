import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadChangeQty } from '../../redux/action';

import plus from '../../assets/img/add.svg';

const BtnInc = ({id}) => {

  const dispatch = useDispatch();

  const inc = useCallback(()=>dispatch(loadChangeQty({qty: 1, id})), [id]);

  return (
    <button
      onClick={inc}
    >
      <img src={plus} alt="inc" />
    </button>
  );
};

export default BtnInc;
