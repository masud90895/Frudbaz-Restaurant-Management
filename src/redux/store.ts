import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { cartSlice } from "./features/addToCartSlice";
import { sendMail } from "./api/sendMail";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [sendMail.reducerPath]: sendMail.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, sendMail.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
