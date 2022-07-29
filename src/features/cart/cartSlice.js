import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0,
    tax: 0,
    miniCartIsOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        openMiniCart: state => {
            state.miniCartIsOpen = true;
        },
        closeMiniCart: state => {
            state.miniCartIsOpen = false;
        },
        addToCart: (state, { payload }) => {
            const cartItem = { ...payload, qty: 1 };
            //CREATING A UNIQUE ID FOR CART ITEM
            const attributeValuePairs =
                cartItem.selectedAttributes.attributes.map(
                    attribute => `${attribute.id}-${attribute.items[0].id}`
                );
            const attributeValuePairsMerged = attributeValuePairs.reduce(
                (sum, pair) => `${sum}_` + `${pair}`,
                ""
            );
            cartItem.id = `${cartItem.product.id}${attributeValuePairsMerged}`;
            //CHECKING IF ITEM IS ALREADY IN CART
            const alreadyInCart = state.cartItems.find(
                item => item.id === cartItem.id
            );
            //UPDATING CART
            if (alreadyInCart) {
                alreadyInCart.qty++;
            } else {
                state.cartItems.push(cartItem);
            }
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                item => item.id === payload.id
            );
            cartItem.qty = cartItem.qty + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                item => item.id === payload.id
            );
            cartItem.qty = cartItem.qty - 1;
        },
        removeItem: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(
                item => item.id !== payload.id
            );
        },
        calculateTotals: (state, { payload }) => {
            let quantity = 0;
            let total = 0;

            state.cartItems.forEach(item => {
                quantity += item.qty;

                const price = item.product.prices.find(
                    price =>
                        price.currency.label === payload.currentCurrency.label
                );
                total += item.qty * price.amount;
            });

            state.quantity = quantity;
            state.total = total;
            state.tax = total * (21 / 100);
        },
    },
});

export const {
    openMiniCart,
    closeMiniCart,
    addToCart,
    increase,
    decrease,
    removeItem,
    calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
