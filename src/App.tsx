import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Sidenav from 'components/Sidenav';
import { Box } from '@mui/material';

import { routes } from 'routes';
import { toggleSidenav } from './store';
import { useAppDispatch, useAppSelector } from './hooks/useTypedSelector';

function App() {
  const { pathname  } = useLocation();
  const dispatch = useAppDispatch();
  const {sidenav, user} = useAppSelector((state) => state); 

  const [margin, setMargin] = useState(0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }

    if(window.innerWidth < 768){
      dispatch(toggleSidenav(false));
    }

  }, [pathname]);

  // when page size changes, close sidenav
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        dispatch(toggleSidenav(false));
      }else{
        dispatch(toggleSidenav(true));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(window.innerWidth > 768){
      if(sidenav.open && pathname !== '/signin'){
        setMargin(sidenav.width);
      } else {
        setMargin(0);
      }
    }else{
      setMargin(0);
    }
      
  }, [sidenav.open, pathname, window.innerWidth ]);


  return (
    <>
      <CssBaseline />
      <Box
        display={'flex'}
      >

        {pathname !== '/signin' && <Sidenav />}

        <Box
          sx = {{ marginLeft: margin + 'px' }}
          width={'100%'}
        >
          <Switch>
            {routes.map((route) => {
              if (route.protected && !user.loggedIn) {
                return;
              }

              return ( 
              <Route
                path={route.route}
                component={route.component}
                key={route.key}
              />)
            })}
            <Redirect from='*' to='/signin' />
          </Switch>
        </Box>
      </Box>
    </>
  );
}

export default App;
