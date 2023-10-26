import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import { productApi } from "./productApi";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(productApi.middleware)
   
});
