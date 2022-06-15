import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SELECT_ORG_TITLE } from '../util/constants';
import { Button, Select } from '@mui/material';

export const Home = () => {
    return (
        <Container>
            <Box sx={{ my: 6 }} style={{ textAlign: 'center', marginTop: 15 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {SELECT_ORG_TITLE}
                </Typography>
            </Box>
            <Select></Select>
            <Button>Test</Button>
        </Container>
    );
};