import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, Query, Field } from "@tilework/opus";

client.setEndpoint(process.env.REACT_APP_API_URL || "http://localhost:4000");

const getQuery = category => {
    const queryProducts = new Query("category", true)
        .addArgument("input", "CategoryInput", { title: category })
        .addField(
            new Field("products", true).addFieldList([
                "id",
                "name",
                "brand",
                "inStock",
                "gallery",
                "attributes{id, name, type, items {displayValue, value, id}}",
                "prices{currency {label, symbol}, amount}",
            ])
        );
    return queryProducts;
};

const initialState = {
    products: [],
    selectedAttributesList: [],
    productsAreLoading: true,
    productsNotFound: false,
};

export const getProducts = createAsyncThunk(
    "productList/getProducts",
    async (category, thunkAPI) => {
        try {
            const resp = await client.post(getQuery(category));
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const productListSlice = createSlice({
    name: "productList",
    initialState,
    reducers: {
        setAttributePlp: (state, { payload }) => {
            const selectedAttributes = state.selectedAttributesList.find(
                attributes => attributes.productId === payload.id
            );
            const attribute = selectedAttributes.attributes.find(
                attribute => attribute.id === payload.attribute.id
            );
            attribute.items[0] = payload.item;
        },
        clearProductListState: state => {
            state.products = [];
            state.selectedAttributesList = [];
            state.productsAreLoading = true;
            state.productsNotFound = false;
        },
    },
    extraReducers: {
        [getProducts.pending]: state => {
            state.productsAreLoading = true;
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            if (!payload.category) {
                state.productsAreLoading = false;
                state.productsNotFound = true;
                return;
            }

            state.productsAreLoading = false;
            state.productsNotFound = false;
            state.products = payload.category.products;
            state.selectedAttributesList = payload.category.products.map(
                product => {
                    const productId = product.id;
                    const attributes = product.attributes.map(attribute => {
                        const id = attribute.id;
                        const name = attribute.name;
                        const type = attribute.type;
                        const items = [attribute.items[0]];
                        return { id, name, type, items };
                    });

                    return { productId, attributes };
                }
            );
        },
        [getProducts.rejected]: (state, action) => {
            console.log(action.payload);
            state.productsAreLoading = false;
        },
    },
});

export const { setAttributePlp, clearProductListState } =
    productListSlice.actions;

export default productListSlice.reducer;
