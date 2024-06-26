import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./Cartslice";
export const Store = configureStore({
  reducer: {
    cart: cartslice.reducer,
  },
});
