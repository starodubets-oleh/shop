import React from 'react';
import { useSelector } from 'react-redux';
import { products, isLoadingProducts } from '../../redux/selectors';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const productsList = useSelector(products);
  const isLoading = useSelector(isLoadingProducts);
  return (
    <div className='cards'>
      {
        isLoading ? (
          <p>Loading...</p>
        )
          :
          (
            productsList.map(item => {
              return (
                <ProductCard
                  key={item.id}
                  data={item}
                />
              )
            })
          )
      }
    </div>
  );
};

export default ProductsList;