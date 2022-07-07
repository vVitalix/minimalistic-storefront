import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbar/navbarSlice";
import modalCurrenciesReducer from "./features/modalCurrencies/modalCurrenciesSlice";
import productListReducer from "./features/productList/productListSlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    modalCurrencies: modalCurrenciesReducer,
    productList: productListReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
