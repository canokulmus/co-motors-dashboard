import { configureStore } from "@reduxjs/toolkit";
import { userReducer, setUser } from "store/slices/userSlice";
import { sidenavReducer, toggleSidenav } from "store/slices/sidenavSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    sidenav: sidenavReducer,
  },
});

export {
  store,
  setUser,
  toggleSidenav,
};
