import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, Query, Field } from "@tilework/opus";

client.setEndpoint("http://localhost:4000");

const queryCategories = new Query("categories", true).addField(new Field("name", true));

const initialState = {
  categories: [],
  defaultCategory: "",
  categoriesAreLoading: false,
};

export const getCategories = createAsyncThunk("navbar/getCategories", async thunkAPI => {
  try {
    const resp = await client.post(queryCategories);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue("something went wrong");
  }
});

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
      console.log(action);
      state.categoriesAreLoading = false;
    },
  },
});

export default navbarSlice.reducer;