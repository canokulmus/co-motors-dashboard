//layouts
import Dashboard from "layouts/dashboard";
import Cars from "layouts/cars"
import Login from "layouts/login";

//icons
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
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
    icon: <IoCarSport size="15px" color="inherit" />,
    component: Cars,
  },
  {
    name: "Sign In",
    key: "signin",
    route: "/signin",
    icon: <IoPerson size="15px" color="inherit" />,
    component: Login,
  },
];
