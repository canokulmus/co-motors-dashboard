import  React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import  { IoMenu } from "react-icons/io5";
import MoreIcon from '@mui/icons-material/MoreVert';
import Breadcrumb from 'components/Breadcrumb';
import borders from 'assets/theme/base/borders';

import { toggleSidenav } from 'store/index';

import { useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { useAppDispatch, useAppSelector } from 'hooks/useTypedSelector';
import { setUser } from 'store';
import { useHistory } from 'react-router-dom';
import colors from 'assets/theme/base/colors';

const Navbar = () => {

  const dispatch = useAppDispatch();
  const sidenav = useAppSelector((state: any) => state.sidenav);
  const { pathname  } = useLocation();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
      dispatch(setUser({
        loggedIn: false,
        name: '',
        username: '',
      }));
      history.push('/signin');
    }

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
      <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx = {{
            '& .MuiPaper-root': {
              backgroundColor: colors.primary.main,
              boxShadow: 'none',
            },

          }}
      >
        <MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
      </Menu>
    );

  return (
    <Box>
      <AppBar 
            position="relative"
            sx={{
                backgroundColor: 'transparent',
                borderRadius: borders.borderRadius.lg,
            }}
      >
        <Toolbar 
            sx={{
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
            }} 
        >

          <Breadcrumb
            routeName={routes.find((route) => route.route === pathname)?.name}
          />

            <Box
                display={"flex"}
            >
                {/* <Search
                    sx={{
                        height: '100%',
                    }}
                >
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Car Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search> */}

                <Box sx={{ display: "flex" }}>

                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={() => dispatch(toggleSidenav(!sidenav.open))}
                        color="inherit"
                    >
                        <IoMenu />
                    </IconButton>
                </Box>
            </Box>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default Navbar;