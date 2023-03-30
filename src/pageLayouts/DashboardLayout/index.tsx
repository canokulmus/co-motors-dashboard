import React from 'react'
import Box from '@mui/material/Box';
import Navbar from 'components/Navbar';
interface DashboardLayoutProps {
    children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Box 
            p = {3}
        >
            <Navbar />
            {children}
        </Box>
    )
}


export default DashboardLayout