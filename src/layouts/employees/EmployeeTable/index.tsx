import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import colors from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';
import styled from '@emotion/styled';
import { Employee } from 'store/slices/employeeSlice';

const StyledTableContainer = styled(TableContainer)`
    background-color: ${colors.darkerBackground};
    border-radius: ${borders.borderRadius.xxl};
`;

const StyledTableRow = styled(TableRow)`
    cursor: pointer;
    border-bottom: ${props => props['aria-checked'] ? 'none' : '0.5px solid ${colors.dark.main}'}; 
    border-top: 0.5px solid ${colors.dark.main}; 
    
    background-color: ${props => props['aria-checked'] ? `${colors.secondary.primary}`: 'transparent'};
    &:hover {
        background-color: ${colors.secondary.primary};
    }
`

const StyledIconButton = styled(IconButton)`
    color: ${colors.primary.main};
`;

const TableHeaderCell = styled(TableCell)`
    color: ${colors.primary.main} !important;
    font-weight: 600;
    border : none;
`
const TableBodyCell = styled(TableCell)`
    border:none;
    font-size: 14px;
    font-weight: 600;
`

const StyledSpan = styled.span`
    color: ${colors.primary.main};
`


interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    latestCompany: string;
}

function createData(
  employeeNo: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address
) {
  return {
    employeeNo,
    name,
    username,
    email,
    phone,
    website,
    address
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow 
        onClick={() => setOpen(!open)} 
        aria-checked={open}
      >
        <TableBodyCell>
          <StyledIconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </StyledIconButton>
        </TableBodyCell>
        <TableBodyCell>{row.employeeNo}</TableBodyCell>
        <TableBodyCell>{row.name}</TableBodyCell>
        <TableBodyCell>{row.username}</TableBodyCell>
        <TableBodyCell>{row.email}</TableBodyCell>
        <TableBodyCell>{row.phone}</TableBodyCell>
        <TableBodyCell>{row.website}</TableBodyCell>
      </StyledTableRow>
      <TableRow
        sx={{
            backgroundColor: open ? colors.secondary.primary : 'transparent',
        }}
      >
        <TableBodyCell 
        style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                  <TableRow>
                    <TableBodyCell/>
                    <TableBodyCell/>
                    <TableBodyCell>
                        <StyledSpan>Street:</StyledSpan> {row.address.street}
                    </TableBodyCell>
                    <TableBodyCell>
                        <StyledSpan>Suite:</StyledSpan> {row.address.suite}
                    </TableBodyCell>
                    <TableBodyCell>
                        <StyledSpan>City:</StyledSpan> {row.address.city}
                    </TableBodyCell>
                    <TableBodyCell>
                        <StyledSpan>Zip Code:</StyledSpan> {row.address.zipcode}
                    </TableBodyCell>
                    <TableBodyCell>
                        <StyledSpan>Company:</StyledSpan> {row.address.latestCompany}
                    </TableBodyCell>
                  </TableRow>
              </Table>
            </Box>
          </Collapse>
        </TableBodyCell>
      </TableRow>
    </React.Fragment>
  );
}

interface EmployeeTableProps {
    employees: Employee[];
    tableHeaders: string[];
}

const EmployeeTable = ({employees, tableHeaders}: EmployeeTableProps) => {

  return (
    <StyledTableContainer>
        <Typography
            variant="h3"
            fontWeight={600}
            m={2}
        >
            Employees
        </Typography>
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header:string) => (
                <TableHeaderCell key={header}>{header}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => {

            const data = createData( 
                employee.id,
                employee.name,
                employee.username,
                employee.email,
                employee.phone,
                employee.website,
                {
                    street: employee.address.street,
                    suite: employee.address.suite,
                    city: employee.address.city,
                    zipcode: employee.address.zipcode,
                    latestCompany: employee.company.name
                }
            )
            return (
                <Row key={employee.id} row={data} />
            )
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default EmployeeTable;