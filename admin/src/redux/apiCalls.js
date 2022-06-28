<<<<<<< HEAD
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { 
  getAllUsersStart, 
  getAllUsersSuccess, 
  getAllUsersFailure, 
  deleteUserStart, 
  deleteUserSuccess, 
  deleteUserFailure 
} from "./usersRedux";
=======
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
} from './usersRedux';
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
<<<<<<< HEAD
} from "./productRedux";
=======
} from './productRedux';
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
<<<<<<< HEAD
    const res = await publicRequest.post("/auth/login", user);
=======
    const res = await publicRequest.post('/auth/login', user);
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
<<<<<<< HEAD
    const res = await publicRequest.get("/products");
=======
    const res = await publicRequest.get('/products');
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

<<<<<<< HEAD

export const deleteProduct = async (id, dispatch) => { 
=======
export const deleteProduct = async (id, dispatch) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
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
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

<<<<<<< HEAD

// USERS 
=======
// USERS
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
export const getUsers = async (dispatch) => {
  dispatch(getAllUsersStart());
  try {
    const res = await userRequest.get('/users');
<<<<<<< HEAD
    dispatch(getAllUsersSuccess(res.data))
  } catch (error) {
    dispatch(getAllUsersFailure())
  }
}

export const deleteUser = async (id, dispatch) => { 
=======
    dispatch(getAllUsersSuccess(res.data));
  } catch (error) {
    dispatch(getAllUsersFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/user/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
<<<<<<< HEAD
};
=======
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
