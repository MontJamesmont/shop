import { combineReducers } from 'redux';
import cart from './productsInCart';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  cart: cart,
  errors: errorReducer,
  auth: authReducer
})