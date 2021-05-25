export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const PUT_PRODUCTS = 'PUT_PRODUCTS';
export const LOAD_IS_LOADING_PRODUCTS = 'LOAD_IS_LOADING_PRODUCTS';
export const PUT_IS_LOADING_PRODUCTS = 'PUT_IS_LOADING_PRODUCTS';
export const LOAD_ADD_TO_CART = 'LOAD_ADD_TO_CART';
export const PUT_ADD_TO_CART = 'PUT_ADD_TO_CART';
export const LOAD_REMOVE_POSITION_FROM_CART = 'LOAD_REMOVE_POSITION_FROM_CART';
export const PUT_REMOVE_POSITION_FROM_CART = 'PUT_REMOVE_POSITION_FROM_CART';
export const LOAD_CHANGE_QTY = 'LOAD_CHANGE_QTY';
export const PUT_CHANGE_QTY = 'PUT_CHANGE_QTY';
export const LOAD_TOTAL_PRICE = 'LOAD_TOTAL_PRICE';
export const PUT_TOTAL_PRICE = 'PUT_TOTAL_PRICE';

export const loadProducts = (state) => {
  return{
    type: LOAD_PRODUCTS,
    payload: state
  };
};
export const putProducts = (data) => {
  return{
    type: PUT_PRODUCTS,
    payload: data
  };
};
export const loadIsLoadingProducts = (state) => {
  return{
    type: LOAD_IS_LOADING_PRODUCTS,
    payload: state
  };
};
export const putIsLoadingProducts = (data) => {
  return{
    type: PUT_IS_LOADING_PRODUCTS,
    payload: data
  };
};
export const loadAddToCart = (state) => {
  return{
    type: LOAD_ADD_TO_CART,
    payload: state
  };
};
export const putAddToCart = (data) => {
  return{
    type: PUT_ADD_TO_CART,
    payload: data
  };
};
export const loadRemovePositionFromCard = (state) => {
  return{
    type: LOAD_REMOVE_POSITION_FROM_CART,
    payload: state
  };
};
export const putRemovePositionFromCard = (data) => {
  return{
    type: PUT_REMOVE_POSITION_FROM_CART,
    payload: data
  };
};
export const loadChangeQty = (state) => {
  return{
    type: LOAD_CHANGE_QTY,
    payload: state
  };
};
export const putChangeQty = (data) => {
  return{
    type: PUT_CHANGE_QTY,
    payload: data
  };
};
export const loadTotalPrice = () => {
  return{
    type: LOAD_TOTAL_PRICE
  };
};
export const putTotalPrice = () => {
  return{
    type: PUT_TOTAL_PRICE
  };
};