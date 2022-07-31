import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import navbarReducer from "./features/navbar/navbarSlice";
import modalCurrenciesReducer from "./features/modalCurrencies/modalCurrenciesSlice";
import productListReducer from "./features/productList/productListSlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";

const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const modalCurrenciesPersistConfig = {
    key: "modalCurrencies",
    storage,
    whitelist: ["currentCurrency"],
};

const rootReducer = combineReducers({
    navbar: navbarReducer,
    modalCurrencies: persistReducer(
        modalCurrenciesPersistConfig,
        modalCurrenciesReducer
    ),
    productList: productListReducer,
    product: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
