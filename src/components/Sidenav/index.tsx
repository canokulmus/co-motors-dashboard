import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useSelector, useDispatch } from 'react-redux';
import borders from 'assets/theme/base/borders';
import colors from 'assets/theme/base/colors';
import {  Typography } from '@mui/material';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidenav = () => {

  const sidenav = useSelector((state: any) => state.sidenav);

  const { pathname  } = useLocation();

  const list = () => (
    <Box
      role="presentation"
      mx={3}
    >
      <Divider 
        sx={{
          backgroundColor: colors.dark.main,
          margin: '15px 0',
        }}
      />
      <List>

        {routes.map((route) => (
          <Link to={route.route}
            style = {{ textDecoration: 'none',color: 'inherit'}}
            key = {route.key}
          >
            <ListItem
              key={route.key}
              disablePadding
              sx = {{
                backgroundColor:  pathname === route.route ? `${colors.sidenavLink.active} !important` : 'transparent',
                borderRadius: borders.borderRadius.lg,

              }}
            >
              <ListItemButton
                sx = {{
                  display: 'flex',
                  alignItems: 'center',
                  color: pathname === route.route ? 'inherit': `${colors.sidenavLink.activeIcon} !important`,
                  height: "50px !important",
                  borderRadius: borders.borderRadius.lg,
                }}
              >
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx = {{
                      backgroundColor: pathname === route.route ?  `${colors.sidenavLink.activeIcon} !important`: `${colors.sidenavLink.active} !important`,
                      width: 30,
                      height: 30,
                      borderRadius: borders.borderRadius.button,
                    }}
                  >
                    {route.icon}
                  </Box>

                <Typography
                  variant='h6'
                  ml = {2}
                  sx = {{
                    // vertical align
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  {route.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      
      </List>
    </Box>
  );

  return (
      <Box
        sx={{
          width: sidenav.width,
          height: sidenav.height,
          display: sidenav.open ? 'flex' : 'none',
          transition: 'all 0.3s ease-in-out',
          position: 'fixed',
        }}
        p = {2}
      >
        <Box
          sx={{
            backgroundColor: `${colors.darkerBackground} !important`,
            width: '100%',
            height: '100%',
            borderRadius: borders.borderRadius.xl,
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            mt={4}
          >
            <img 
              src="images/logo.svg" 
              width={`${sidenav.width * 0.75}px`}
              alt=""
             />
          </Box>
          {list()}
        </Box>
      </Box>
  );
}
export default Sidenav;
