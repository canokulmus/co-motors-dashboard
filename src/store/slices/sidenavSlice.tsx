import { createSlice } from "@reduxjs/toolkit";

interface SidenavState {
    open: boolean;
    width: number;
    height: string;
}

const initialState: SidenavState = {
  open: true,
  width: 300,
  height: '100vh',
};

const sidenavSlice = createSlice({
  name: "sidenav",
  initialState,
  reducers: {
    toggleSidenav: (state, action) => {
        state.open = action.payload;
    }
  },
});

export const { toggleSidenav } = sidenavSlice.actions;
export const sidenavReducer = sidenavSlice.reducer;
