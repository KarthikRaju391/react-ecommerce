<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
=======
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    notifyAdd: false,
    notifyUpdate: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
      state.notifyUpdate = true;
    },
    updateProductEnd: (state) => {
      state.notifyUpdate = false;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
      state.notifyAdd = true;
    },
    addProductEnd: (state) => {
      state.notifyAdd = false;
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductEnd,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  addProductEnd,
} = productSlice.actions;

export default productSlice.reducer;
