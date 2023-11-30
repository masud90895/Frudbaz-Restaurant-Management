
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { cartSlice } from "./features/addToCartSlice";



const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
