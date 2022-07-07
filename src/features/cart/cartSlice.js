import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = { ...payload, qty: 1 };
      //CREATING A UNIQUE ID FOR CART ITEM
      const attributeValuePairs = cartItem.selectedAttributes.attributes.map(
        attribute => `${attribute.id}-${attribute.items[0].id}`
      );
      const attributeValuePairsMerged = attributeValuePairs.reduce(
        (sum, pair) => `${sum}_` + `${pair}`,
        ""
      );
      cartItem.id = `${cartItem.product.id}${attributeValuePairsMerged}`;
      //CHECKING IF ITEM IS ALREADY IN CART
      const alreadyInCart = state.cartItems.find(itemInCart => itemInCart.id === cartItem.id);
      //UPDATING CART
      if (alreadyInCart) {
        alreadyInCart.qty++;
      } else {
        state.cartItems.push(cartItem);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
