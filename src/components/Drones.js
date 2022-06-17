import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Drone} from './Drone';
import '../styles/Drones.css';

export const Drones = (props) => {
    const rows = props.data;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell className="drones-table-cell">Drone</TableCell>
                        <TableCell className="drones-table-cell" align="right">Max Weight</TableCell>
                        <TableCell className="drones-table-cell" align="right">Trips</TableCell>
                        <TableCell className="drones-table-cell" align="right">Deliveries</TableCell>
                        <TableCell className="drones-table-cell" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Drone key={row.drone.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
