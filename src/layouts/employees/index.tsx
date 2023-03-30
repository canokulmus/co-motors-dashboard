import React, {useEffect} from "react";
import DashboardLayout from "pageLayouts/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "store";

const Employees = () => {

  const dispatch = useDispatch();
  const employees = useSelector((state: any) => state.employee);

  useEffect(() => {
    // dispatch(fetchEmployees()); 
  }, [dispatch]);

  return (
    <DashboardLayout>
      <div>Employees</div>
    </DashboardLayout>
  );
};

export default Employees;
