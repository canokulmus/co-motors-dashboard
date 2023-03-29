//layouts
import  Dashboard  from "./layouts/dashboard";

//icons 
import { IoHome } from "react-icons/io5";

export interface IRoute {
    name?: string;
    key?: string;
    route?: string;
    icon?: JSX.Element;
    component?: React.FC;
}

export const routes: IRoute[] = [
    {
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        icon: <IoHome size="15px" color="inherit" />,
        component: Dashboard,
    },

]