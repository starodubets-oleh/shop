import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { loadProducts } from '../../../redux/action'


const QtyProducts = () => {

  const dispatch = useDispatch();

  const [min, max] = [1, 50];

  const [qty, setQty] = useState(10);

  const { register, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
    defaultValues: { qty }
  });

  const handleChange = ({ target: { value } }) => {
    if (value <= max && value >= min) {
      setQty(value)
    }
  };

  useEffect(() => {
    if (isValid) {
      dispatch(loadProducts(qty));
    }
  }, [qty]);

  return (
    <div className="qty-products">
      <form onChange={handleChange}>
        <label htmlFor='qty'>
          Quantity products on page
            <input type="number" name='qty' {...register('qty', { max, min })} />
          {errors.qty && errors.qty.type === 'min' && <span>{`Choose from ${min} to ${max}`}</span>}
          {errors.qty && errors.qty.type === 'max' && <span>{`Choose from ${min} to ${max}`}</span>}
        </label>
      </form>
    </div>
  );
}

export default QtyProducts;
