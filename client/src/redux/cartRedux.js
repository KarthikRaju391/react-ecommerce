import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,

    wishlist: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
    addToWishlist: (state) => {
      state.wishlist += 1;
    }
  },
});

export const { addProduct, addToWishlist } = cartSlice.actions;
export default cartSlice.reducer;
