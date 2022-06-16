import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getCount } from '../util/functions';

export const Drone = (props) => {
    const { row } = props;
    const drone = row.drone ? row.drone : undefined;
    const trips = row.trips ? row.trips : undefined;
    const [open, setOpen] = React.useState(true);
    const count = getCount(trips);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {drone.name}
                </TableCell>
                <TableCell align="right">{drone.maxWeight}</TableCell>
                <TableCell align="right">{trips.length}</TableCell>
                <TableCell align="right">{count}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {trips.map((tripRow, index) => (
                                <Table size="small" aria-label="deliveries" style={{ backgroundColor: '#f3f3f3' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontSize: 12, fontWeight: 'bold' }}>Trip {index + 1}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <Table size="small" aria-label="deliveries" style={{ backgroundColor: '#f7f7f7' }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell style={{ fontSize: 12, fontWeight: 'bold' }}>Location</TableCell>
                                                        <TableCell style={{ fontSize: 12, fontWeight: 'bold' }}>Weight</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {tripRow.map((trip) => (
                                                        <TableRow key={trip}>
                                                            <TableCell style={{ fontSize: 12 }}>{trip.location.name}</TableCell>
                                                            <TableCell style={{ fontSize: 12 }}>{trip.location.weight}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            ))}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

