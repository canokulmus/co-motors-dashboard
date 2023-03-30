import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Sidenav from 'components/Sidenav';
import { Box } from '@mui/material';

import { useSelector } from 'react-redux';
import { routes } from 'routes';

function App() {
  const { pathname  } = useLocation();
  const sidenav = useSelector((state: any) => state.sidenav);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      <CssBaseline />
      <Box
        display={'flex'}
      >
        <Sidenav />
        <Box
          sx = {{ marginLeft:sidenav.open ? ` ${sidenav.width}px` : 0 }}
          width={'100%'}
        >
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.route}
                component={route.component}
                key={route.key}
              />
            ))}
            <Redirect from='*' to='/dashboard' />
          </Switch>
        </Box>
      </Box>
    </>
  );
}

export default App;
