import * as React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { DeliveryService } from './components/DeliveryService';

function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <Home /> },
      { path: '/deliveries', element: <DeliveryService /> }
    ]
  )
  return routes;
}

export default App => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};