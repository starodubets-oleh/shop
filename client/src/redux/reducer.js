import { PUT_ADD_TO_CART, PUT_CHANGE_QTY, PUT_IS_LOADING_PRODUCTS, PUT_PRODUCTS, PUT_REMOVE_POSITION_FROM_CART, PUT_TOTAL_PRICE } from './action';

const initialState = {
  products: [],
  isLoadingProducts: false,
  cart: [],
  shipping: [],
  totalPrice: 0
};

export const data = (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_PRODUCTS:
      return {
        ...state,
        products: payload
      };
      case PUT_IS_LOADING_PRODUCTS:
        return {
          ...state,
          isLoadingProducts: payload
        }
      case PUT_ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      case PUT_REMOVE_POSITION_FROM_CART:
        return {
          ...state,
          cart: state.cart.reduce( (acc, item) => {
            if (item.id !== payload) {
              acc.push(item)
            }
            return acc
          }, [] )
        }
      case PUT_CHANGE_QTY:
        return {
          ...state,
          cart: state.cart.map( item => {
            if (item.id === payload.id) {
              return {
                ...item,
                totalPrice: Number((item.price * (item.qty + payload.qty)).toFixed(2)),
                qty: item.qty + payload.qty
              }
            } else {
              return item
            }
          } )
        }
      case PUT_TOTAL_PRICE:
        return{
          ...state,
          totalPrice: state.cart.length === 0 ? 0 :  state.cart.reduce( (acc, item) => {
            return +acc + item.totalPrice
          }, [])
        }
    default:
      return state;
  };
};
