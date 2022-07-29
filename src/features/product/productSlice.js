import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, Query } from "@tilework/opus";

client.setEndpoint("http://localhost:4000");

const getQuery = productId => {
    const querySingleProduct = new Query("product", true)
        .addArgument("id", "String!", productId)
        .addFieldList([
            "id",
            "name",
            "brand",
            "inStock",
            "gallery",
            "description",
            "attributes{id, name, type, items {displayValue, value, id}}",
            "prices{currency {label, symbol}, amount}",
        ]);
    return querySingleProduct;
};

const initialState = {
    product: {},
    selectedAttributes: {},
    mainImgIndex: 0,
    productIsLoading: true,
    productNotFound: false,
};

export const getSingleProduct = createAsyncThunk(
    "product/getSingleProduct",
    async (productId, thunkAPI) => {
        try {
            const resp = await client.post(getQuery(productId));
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAttributePdp: (state, { payload }) => {
            const attribute = state.selectedAttributes.attributes.find(
                attribute => attribute.id === payload.attribute.id
            );
            attribute.items[0] = payload.item;
        },
        setMainImg: (state, { payload }) => {
            state.mainImgIndex = payload.index;
        },
        clearProductState: state => {
            state.product = {};
            state.selectedAttributes = {};
            state.mainImgIndex = 0;
            state.productIsLoading = true;
            state.productNotFound = false;
        },
    },
    extraReducers: {
        [getSingleProduct.pending]: state => {
            state.productIsLoading = true;
        },
        [getSingleProduct.fulfilled]: (state, { payload }) => {
            if (!payload.product) {
                state.productIsLoading = false;
                state.productNotFound = true;
                return;
            }

            state.productIsLoading = false;
            state.productNotFound = false;
            state.product = payload.product;
            state.mainImgIndex = 0;

            const productId = payload.product.id;
            const attributes = payload.product.attributes.map(attribute => {
                const id = attribute.id;
                const name = attribute.name;
                const type = attribute.type;
                const items = [attribute.items[0]];
                return { id, name, type, items };
            });
            state.selectedAttributes = { productId, attributes };
        },
        [getSingleProduct.rejected]: (state, action) => {
            console.log(action.payload);
            state.productIsLoading = false;
        },
    },
});

export const { setAttributePdp, setMainImg, clearProductState } =
    productSlice.actions;

export default productSlice.reducer;
