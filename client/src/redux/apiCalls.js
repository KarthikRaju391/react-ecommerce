import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userRedux';

import { publicRequest, userRequest } from '../requestMethods';
import {
  addProduct,
  hideCartNotification,
  hideWishNotification,
  notifyUserCart,
  notifyUserWish,
} from './cartRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const addToCart = async (dispatch, product, userId) => {
  try {
    await userRequest.post('/carts', { userId, product });
    dispatch(addProduct({ product, userId }));
  } catch (err) {
    console.log(err);
  }
};

export const showCartNotification = (dispatch) => {
  dispatch(notifyUserCart());
  setTimeout(() => {
    dispatch(hideCartNotification());
  }, 2500);
};

export const showWishNotification = (dispatch) => {
  dispatch(notifyUserWish());
  setTimeout(() => {
    dispatch(hideWishNotification());
  }, 2500);
};
