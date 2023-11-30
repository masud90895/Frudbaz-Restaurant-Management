import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      if (!state.cart.find((s: any) => s.id === action.payload.id)) {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      const deleteCart = state.cart.filter((cart: any) => {
        return cart.id !== action.payload;
      });
      return {
        ...state,
        cart: deleteCart,
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
