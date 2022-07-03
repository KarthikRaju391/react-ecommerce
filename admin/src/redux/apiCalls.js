import { loginFailure, loginStart, loginSuccess } from './userRedux';
import { publicRequest, userRequest } from '../requestMethods';
import {
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserFailure,
  addUserStart,
  addUserSuccess,
  addUserEnd,
  updateUserEnd,
} from './usersRedux';

import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductEnd,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  addProductEnd,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
    setTimeout(() => {
      dispatch(updateProductEnd());
    }, 2500);
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
    setTimeout(() => {
      dispatch(addProductEnd());
    }, 2500);
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    const res = await userRequest.post('/users', user);
    dispatch(addUserSuccess(res.data));
    setTimeout(() => {
      dispatch(addUserEnd());
    }, 2500);
  } catch (error) {
    dispatch(addUserFailure());
  }
};
// USERS 
export const getUsers = async (dispatch) => {
  dispatch(getAllUsersStart());
  try {
    const res = await userRequest.get('/users');
    dispatch(getAllUsersSuccess(res.data))
  } catch (error) {
    dispatch(getAllUsersFailure())
  }
}

export const deleteUser = async (id, dispatch) => { 
    dispatch(getAllUsersSuccess(res.data));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
    setTimeout(() => {
      dispatch(updateUserEnd());
    }, 2500);
  } catch (err) {
    dispatch(updateUserFailure());
  }
};
