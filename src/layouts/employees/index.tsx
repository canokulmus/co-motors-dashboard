import React, {useEffect} from "react";
import DashboardLayout from "pageLayouts/DashboardLayout";
import { fetchEmployees } from "store";
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector';
import EmployeeTable from "./EmployeeTable";

const Employees = () => {

  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employee);

  const tableHeaders = [
    "",
    "Employee No",
    "Name",
    "Username",
    "Email",
    "Phone",
    "Website",
  ]

  useEffect(() => {
    !employees.length && dispatch(fetchEmployees());
  }, []);

  return (
    <DashboardLayout>
      <EmployeeTable 
        employees = {employees}
        tableHeaders = {tableHeaders}
      />
    </DashboardLayout>
  );
};

export default Employees;
