import * as React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';

function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <Login /> }, 
      { path: '/home', element: <Home /> }
    ]
  )
  return routes;
}

export default App => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};