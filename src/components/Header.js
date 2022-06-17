import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import '../styles/Header.css';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <MaterialLink className="title" component={RouterLink} to='/'>Deliveries</MaterialLink>
      </header>
    );
  }
}

