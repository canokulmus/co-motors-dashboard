import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
//components
import Sidenav from 'components/Sidenav';

//layouts
import Dashboard from 'layouts/dashboard';
import Login from 'layouts/login';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;

    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      <CssBaseline />
      <Sidenav />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Redirect from='*' to='/dashboard' />
      </Switch>
    </>
  );
}

export default App;
