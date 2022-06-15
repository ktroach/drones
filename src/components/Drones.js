import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Drone} from './Drone';

export const Drones = (props) => {
    const rows = props.data;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Drone</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Max Weight</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Trips</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Deliveries</TableCell>
                        <TableCell />
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
