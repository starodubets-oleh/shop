import React from 'react';

const BtnPay = ({children, ...props}) => {
  return (
    <button
      {...props}
    >{children}</button>
  );
};

export default BtnPay;
