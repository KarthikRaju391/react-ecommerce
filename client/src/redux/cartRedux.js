import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    userId: null,
    products: [],
    quantity: 0,
    total: 0,
    wishlist: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log('action', action);
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total +=
        action.payload.product.price * action.payload.product.quantity;
      state.userId = action.payload.Id;
    },
    addToWishlist: (state) => {
      state.wishlist += 1;
    },
    increaseQuantity: (state, action) => {
      state.products.forEach((product) => {
        if (product._id === action.payload) {
          state.total += product.price;
          product.quantity += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.products.forEach((product) => {
        if (product._id === action.payload && product.quantity > 1) {
          product.quantity -= 1;
          state.total -= product.price;
        } else if (product._id === action.payload && product.quantity === 1) {
          state.total -= product.price;
          state.products.splice(
            state.products.findIndex((item) => item._id === action.payload),
            1
          );
          if (state.products.length === 0) {
            state.quantity = 0;
            state.total = 0;
          } else {
            state.quantity -= 1;
          }
        }
      });
    },
  },
});

export const { addProduct, addToWishlist, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
