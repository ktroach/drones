import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { HOME_TITLE } from '../util/constants';

export const Home = () => {
    return (
        <Container>
            <Box sx={{ my: 6 }} style={{ textAlign: 'center', marginTop: 15 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {HOME_TITLE}
                </Typography>
            </Box>
        </Container>
    );
};