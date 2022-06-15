import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <MaterialLink class="title" component={RouterLink} to='/'>Home</MaterialLink>
        <MaterialLink class="title" component={RouterLink} to='/deliveries'>Deliveries</MaterialLink>
      </header>
    );
  }
}

