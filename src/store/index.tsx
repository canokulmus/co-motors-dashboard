import { configureStore } from "@reduxjs/toolkit";
import { userReducer, setUser } from "store/slices/userSlice";
import { sidenavReducer, toggleSidenav } from "store/slices/sidenavSlice";
import { employeeReducer} from "store/slices/employeeSlice";
import { fetchEmployees } from "store/thunk";

const store = configureStore({
  reducer: {
    user: userReducer,
    sidenav: sidenavReducer,
    employee: employeeReducer,
  },
});

export {
  store,
  setUser,
  toggleSidenav,
  fetchEmployees,
};
