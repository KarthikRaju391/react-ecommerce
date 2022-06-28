import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
<<<<<<< HEAD
=======
    wishlist: 0
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
<<<<<<< HEAD
  },
});

export const { addProduct } = cartSlice.actions;
=======
    addToWishlist: (state) => {
      state.wishlist += 1;
    }
  },
});

export const { addProduct, addToWishlist } = cartSlice.actions;
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
export default cartSlice.reducer;
