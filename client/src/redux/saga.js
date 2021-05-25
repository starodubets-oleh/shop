import {put, all, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';


import {
  LOAD_PRODUCTS,
  LOAD_IS_LOADING_PRODUCTS,
  putIsLoadingProducts,
  putProducts,
  putAddToCart,
  LOAD_ADD_TO_CART,
  putRemovePositionFromCard,
  LOAD_REMOVE_POSITION_FROM_CART,
  LOAD_CHANGE_QTY,
  putChangeQty,
  putTotalPrice,
  LOAD_TOTAL_PRICE
} from './action';

const link = 'http://localhost:5555/?page=1&limit=';
//IS LOADING PRODUCTS

function* workerIsLoading({ payload }) {
  const data = yield payload;
  yield put(putIsLoadingProducts(data));
};

function* watchIsLoading() {
  yield takeLatest(LOAD_IS_LOADING_PRODUCTS, workerIsLoading);
};

//GET PRODUCTS

function fetchProducts(payload) {
  return axios.get(link + payload).then((res) => res.data);
};
function* workerProducts({ payload }) {
  try {
    yield put(putIsLoadingProducts(true));
    const data = yield call(fetchProducts, payload);
    yield put(putProducts(data));
  } catch (error) {
    yield alert(JSON.stringify(error, null, 4))
  } finally {
    yield put(putIsLoadingProducts(false));
  }
};
function* watchGoodsList() {
  yield takeLatest(LOAD_PRODUCTS, workerProducts);
};

// ADD TO CART

function* workerAddToCart({payload}) {
  const data = yield payload;
  yield put(putAddToCart(data))
};

function* watcherAddToCart() {
  yield takeLatest(LOAD_ADD_TO_CART, workerAddToCart)
};
// REMOVE POSITION FROM CART

function* workerRemovePositionFromCart({payload}) {
  const data = yield payload;
  yield put(putRemovePositionFromCard(data))
};

function* watcherRemovePositionFromCart() {
  yield takeLatest(LOAD_REMOVE_POSITION_FROM_CART, workerRemovePositionFromCart)
};
// CHANGE QUANTITY POSITION IN CART

function* workerChangeQtyPosition({payload}) {
  const data = yield payload;
  yield put(putChangeQty(data))
};

function* watcherChangeQtyPosition() {
  yield takeLatest(LOAD_CHANGE_QTY, workerChangeQtyPosition)
};
// CALCULATE TOTAL PRICE

function* workerCalculateTotalPrice() {
  yield put(putTotalPrice())
};

function* watcherCalculateTotalPrice() {
  yield takeLatest(LOAD_TOTAL_PRICE, workerCalculateTotalPrice)
};

export default function* rootSaga() {
  yield all([
    watchGoodsList(),
    watchIsLoading(),
    watcherAddToCart(),
    watcherRemovePositionFromCart(),
    watcherChangeQtyPosition(),
    watcherCalculateTotalPrice()
  ]);
};
