import React from 'react';
import { Link } from 'react-router-dom';

const BtnBuy = ({ children }) => {
  return (
    <Link to="/shipping">
      <button
      >
        {children}
      </button>
    </Link>
  );
};

export default BtnBuy;
