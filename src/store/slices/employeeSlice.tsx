import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "store/thunk";

const employeeSlice = createSlice({
    name: "employee",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const {  } = employeeSlice.actions;
export const employeeReducer = employeeSlice.reducer;
