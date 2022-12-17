import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, Query, Field } from "@tilework/opus";

client.setEndpoint(process.env.REACT_APP_API_URL || "http://localhost:4000");

const queryCategories = new Query("categories", true).addField(
    new Field("name", true)
);

const initialState = {
    categories: [],
    defaultCategory: "",
    categoriesAreLoading: true,
};

export const getCategories = createAsyncThunk(
    "navbar/getCategories",
    async thunkAPI => {
        try {
            const resp = await client.post(queryCategories);
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    extraReducers: {
        [getCategories.pending]: state => {
            state.categoriesAreLoading = true;
        },
        [getCategories.fulfilled]: (state, { payload }) => {
            state.categoriesAreLoading = false;
            state.categories = payload.categories;
            state.defaultCategory = payload.categories[0].name;
        },
        [getCategories.rejected]: (state, action) => {
            console.log(action.payload);
            state.categoriesAreLoading = false;
        },
    },
});

export default navbarSlice.reducer;
