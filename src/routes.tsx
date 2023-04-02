//layouts
import Dashboard from "layouts/dashboard";
import CarDetails from "layouts/carDetails";
import Cars from "layouts/cars"
import Employees from "layouts/employees";
import Login from "layouts/login";

//icons
import { IoAdd } from "react-icons/io5";
import { IoPerson, IoPeople } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
export interface IRoute {
  name: string;
  key: string;
  route: string;
  icon: JSX.Element;
  component: React.FC;
  protected: boolean;
}

export const routes: IRoute[] = [

  {
    name: "Cars",
    key: "cars",
    route: "/cars",
    icon: <IoCarSportSharp size="15px" color="inherit" />,
    component: Cars,
    protected: true,
  },
  {
    name: "Car Details",
    key: "car-details",
    route: "/car-details",
    icon: <IoCarSportSharp size="15px" color="inherit" />,
    component: CarDetails,
    protected: true,
  },
  {
    name: "Employees",
    key: "employees",
    route: "/employees",
    icon: <IoPeople size="15px" color="inherit" />,
    component: Employees,
    protected: true,
  },
  {
    name: "Add Employee",
    key: "add-employee",
    route: "/add-employee",
    icon: <IoAdd size="15px" color="inherit" />,
    component: Dashboard,
    protected: true,
  },
  {
    name: "Sign In",
    key: "signin",
    route: "/signin",
    icon: <IoPerson size="15px" color="inherit" />,
    component: Login,
    protected: false,
  },
];
