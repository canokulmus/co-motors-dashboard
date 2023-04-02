import {useState} from "react";
import DashboardLayout from "pageLayouts/DashboardLayout";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "components/Input";
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import { IoAdd, IoAddCircle } from "react-icons/io5";
import { useHistory } from "react-router-dom";

interface Employee {
  Name: string,
  Surname: string,
  Email: string,
  Phone: string,
  Website : string,
  Street: string,
  Suite: string,
  City: string,
  Country: string,
  ZipCode: string,
  LastCompany: string,
}


const Dashboard = () => {

  const history = useHistory();
  const keys: (keyof Employee)[] = [ "Name", "Surname", "Email", "Phone", "Website", "Street", "Suite", "City", "Country", "ZipCode", "LastCompany" ];

  const [employee, setEmployee] = useState<Employee>({
    Name: "",
    Surname: "",
    Email: "",
    Phone: "",
    Website : "",
    Street: "",
    Suite: "",
    City: "",
    Country: "",
    ZipCode: "",
    LastCompany: "",
  });

  const [error, setError] = useState({
    Name: false,
    Surname: false,
    Email: false,
    Phone: false,
    Website : false,
    Street: false,
    Suite: false,
    City: false,
    Country: false,
    ZipCode: false,
    LastCompany: false,
  });

  const handleAddEmployee = () => {

    let hasError = false;

      if (employee.Name === "" || employee.Surname === "" || employee.Email === "" || employee.Phone === "" || employee.Website === "" || employee.Street === "" || employee.Suite === "" || employee.City === "" || employee.Country === "" || employee.ZipCode === "" || employee.LastCompany === "") {
        hasError = true;
        setError({
          ...error,
          Name: employee.Name === "",
          Surname: employee.Surname === "",
          Email: employee.Email === "",
          Phone: employee.Phone === "",
          Website : employee.Website === "",
          Street: employee.Street === "",
          Suite: employee.Suite === "",
          City: employee.City === "",
          Country: employee.Country === "",
          ZipCode: employee.ZipCode === "",
          LastCompany: employee.LastCompany === "",
        });
      }

    if (!hasError) {
      history.push("/employees");
    }

  };

  return (
    <DashboardLayout>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        justifyContent={'center'}
      >
        <Grid container spacing={2}>
          {keys.map((key) => (
            <Grid item xs={12} md={6} lg={4} key={key}>
              <Input
                label={key}
                placeholder={`Enter employee ${key}`}
                value={employee[key]}
                onChange={(e) => setEmployee({ ...employee, [key]: e.target.value })}
                error={error[key]}
              />
          </Grid>
          ))}
        </Grid>
        <Button
            variant="contained"
            sx={{
              color: colors.text.primary,
              backgroundColor: colors.primary.main,
              width: '200px',
              padding: '15px 0 15px 0 !important', 
              borderRadius: borders.borderRadius.lg,
              marginTop: '20px',
              '&:hover': {
                backgroundColor: colors.text.primary,
                color: colors.primary.main,
              }
            }}
            onClick={handleAddEmployee}
          >
            <IoAddCircle 
              size={25}
              style={{marginRight: '10px'}}
            />
            Add Employee
        </Button>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
