import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    loggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.loggedIn = action.payload.loggedIn;
        },
    },
})

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;