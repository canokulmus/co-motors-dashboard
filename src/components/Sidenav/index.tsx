import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';

import colors from 'assets/theme/base/colors';
import { Button } from '@mui/material';
import { toggleSidenav } from 'store/slices/sidenavSlice';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Sidenav = () => {

  const dispatch = useDispatch();
  const sidenav = useSelector((state: any) => state.sidenav);

  const { pathname  } = useLocation();

  const list = () => (
    <Box
      role="presentation"
      sx={{ width: '100%'}}
    >

      <List>
        {routes.map((route) => (
          <Link to={route.route}
            style = {{
              textDecoration: 'none',
              color: 'inherit',
            }}
            key = {route.key}
          >
            <ListItem
              key={route.key}
              disablePadding
              sx = {{
                backgroundColor:  pathname === route.route ? `red !important` : 'transparent',
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider />

      <Button
        onClick={() => dispatch(toggleSidenav(false))}
      >
        close
      </Button>
    </Box>
  );

  return (
      <Box
        sx={{
          backgroundColor: `${colors.darkerBackground} !important`,
          width: sidenav.width,
          height: sidenav.height,
          display: sidenav.open ? 'flex' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {list()}
      </Box>
  );
}
export default Sidenav;
