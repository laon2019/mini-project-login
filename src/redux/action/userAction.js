import api from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("logIn", async (userNickName, { dispatch, rejectWithValue }) => {
    try {
        const response = await api.post('');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});