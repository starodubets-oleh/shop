import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import BtnPay from '../Buttons/BtnPay';

import { totalPrice } from '../../redux/selectors';

import {reEmail, rePhone} from '../../utils/regExp'

const shippingOptions = [
  { name: 'Free shipping', price: '' },
  { name: 'Express shipping- additional', price: '9.99 €' },
  { name: 'Courier shipping - additional', price: '19.99 €' }
];

const ShippingSettings = () => {

  const price = useSelector(totalPrice);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true
  });

  const [shippingList, setShippingList] = useState(shippingOptions);
  const [shippingSelected, setShippingSelected] = useState(shippingList[0]);
  const [shippingData, setShippingData] = useState({});

  const onSubmitForm = useCallback((data) => {
    setShippingData({
      ...data,
      shipping: shippingSelected
    });
  }, [shippingSelected])

  const handleChangeShipping = useCallback(({ target: { value } }) => {
    setShippingSelected(value);
  })

  useEffect(() => {
    if (price > 300) {
      setShippingSelected({ name: 'Free express shipping', price: '' })
      setShippingList(
        [{ name: 'Free express shipping', price: '' }, ...shippingOptions]
      )
    } else {
      setShippingList(shippingOptions)
    }
  }, [totalPrice]);

  useEffect(() => {
    if (Object.values(shippingData).length > 0) {
      alert(JSON.stringify(shippingData, null, 4))
    }
  }, [shippingData]);

  return (
    <div className='shipping-box'>
      <div className='shipping-card'>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor='name'>
            Name*
            <input className={errors.name ? 'is-valid' : null} id='name' {...register('name', { minLength: 3 })} />
            {errors.name && errors.name.type === 'minLength' && <span>Min length 3</span>}
          </label>
          <label htmlFor='name'>
            Address*
            <input className={errors.address ? 'is-valid' : null} id='address' {...register('address', { required: true, minLength: 3 })} />
            {errors.address && errors.address.type === 'minLength' && <span>Min length 3</span>}
          </label>
          <label htmlFor='phone'>
            Phone
            <input className={errors.phone ? 'is-valid' : null} id='phone' {...register('phone', { required: true, pattern: rePhone })} />
            {errors.phone && errors.phone.type === 'pattern' && <span>This is not phone number</span>}
          </label>
          <label htmlFor='email'>
            Email
            <input className={errors.email ? 'is-valid' : null} id='email' {...register('email', { required: true, pattern: reEmail })} />
            {errors.email && errors.email.type === 'pattern' && <span>This is not email</span>}
          </label>
          <div className='shipping-select'>
            <span>Shipping options</span>
            <select value={shippingSelected.name} onChange={handleChangeShipping}>
              {shippingList.map((item) => {
                return (
                  <option key={item.name} value={item}>
                    {item.name + ' ' + item.price}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='btn-pay'>
            <BtnPay
              type='submit'
              disabled={!isValid}
            >
              pay
            </BtnPay>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingSettings;
