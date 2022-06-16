import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Drones } from './Drones';
import { getAllDroneSquadDeliveries } from '../api/Endpoints';
import {DELIVERY_SERVICE_TITLE} from '../util/constants';

export const DeliveryService = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const droneDeliveries = await getAllDroneSquadDeliveries(2);
        setDeliveries(droneDeliveries);
      } catch (err) {
        setDeliveries(null);
      }
    }
    fetchDeliveries();
  }, [])  

  return (
    <Container>
      <Box sx={{ my: 6 }} style={{ textAlign: 'center', marginTop: 15 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {DELIVERY_SERVICE_TITLE}
        </Typography>
      </Box>
      <Drones data={deliveries} />
    </Container>
  );
};