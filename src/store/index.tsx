import { configureStore } from "@reduxjs/toolkit";
import { userReducer, setUser } from "store/slices/userSlice";
import { sidenavReducer, toggleSidenav } from "store/slices/sidenavSlice";
import { employeeReducer, fetchEmployees} from "store/slices/employeeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    sidenav: sidenavReducer,
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {
  store,
  setUser,
  toggleSidenav,
  fetchEmployees,
};
