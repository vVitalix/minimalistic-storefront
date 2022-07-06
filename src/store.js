import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import modalCurrenciesReducer from "./features/modalCurrencies/modalCurrenciesSlice";
import productListReducer from "./features/productList/productListSlice";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    modalCurrencies: modalCurrenciesReducer,
    productList: productListReducer,
    cart: cartReducer,
  },
});
