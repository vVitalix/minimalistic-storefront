import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client, Query, Field } from "@tilework/opus";

client.setEndpoint("http://localhost:4000");

const queryCurrencies = new Query("currencies", true)
    .addField(new Field("label", true))
    .addField(new Field("symbol", true));

const initialState = {
    currencies: [],
    currentCurrency: {},
    currenciesAreLoading: true,
    isOpen: false,
};

export const getCurrencies = createAsyncThunk(
    "modalCurrencies/getCurrencies",
    async thunkAPI => {
        try {
            const resp = await client.post(queryCurrencies);
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const modalCurrenciesSlice = createSlice({
    name: "modalCurrencies",
    initialState,
    reducers: {
        openModalCurrencies: state => {
            state.isOpen = true;
        },
        closeModalCurrencies: state => {
            state.isOpen = false;
        },
        setCurrency: (state, { payload }) => {
            state.currentCurrency = payload;
        },
    },
    extraReducers: {
        [getCurrencies.pending]: state => {
            state.currenciesAreLoading = true;
        },
        [getCurrencies.fulfilled]: (state, { payload }) => {
            state.currenciesAreLoading = false;
            state.currencies = payload.currencies;
            state.currentCurrency = payload.currencies[0];
        },
        [getCurrencies.rejected]: (state, action) => {
            console.log(action.payload);
            state.currenciesAreLoading = false;
        },
    },
});

export const { openModalCurrencies, closeModalCurrencies, setCurrency } =
    modalCurrenciesSlice.actions;

export default modalCurrenciesSlice.reducer;
