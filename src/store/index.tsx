import { configureStore } from "@reduxjs/toolkit";
import { userReducer, setUser } from "store/slices/userSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store, setUser };
