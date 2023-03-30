//layouts
import Dashboard from "layouts/dashboard";
import Cars from "layouts/cars"
import Employees from "layouts/employees";
import Login from "layouts/login";

//icons
import { IoHome } from "react-icons/io5";
import { IoPerson, IoPeople } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
export interface IRoute {
  name: string;
  key: string;
  route: string;
  icon: JSX.Element;
  component: React.FC;
}

export const routes: IRoute[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
  },
  {
    name: "Cars",
    key: "cars",
    route: "/cars",
    icon: <IoCarSportSharp size="15px" color="inherit" />,
    component: Cars,
  },
  {
    name: "Employees",
    key: "employees",
    route: "/employees",
    icon: <IoPeople size="15px" color="inherit" />,
    component: Employees,
  },
  {
    name: "Sign In",
    key: "signin",
    route: "/signin",
    icon: <IoPerson size="15px" color="inherit" />,
    component: Login,
  },
];
