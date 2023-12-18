import api from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("logIn", async ({ userId, password }, { rejectWithValue }) => {
    try {
        const response = await api.get(`/login?userId=${userId}&password=${password}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export const signUp = createAsyncThunk("signUp", async (userData, { dispatch, rejectWithValue }) => {
    try {
        const response = await api.post('/sign-up', userData);;
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});