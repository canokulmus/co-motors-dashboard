import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";


const Breadcrumb = () => {
  return (
    <Box role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          to="/casd"
          style = {{ textDecoration: 'none',color: 'inherit'}}
        >
          <IoHome size="15px" color="text" />
        </Link>
        <Typography 
          variant='subtitle2'
          color={'white'}
        >
          Dashboard
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default Breadcrumb;