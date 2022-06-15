import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Drones } from './Drones';
import { getAllDroneDeliveriesByOrg } from '../api/endpoints';
import {DELIVERY_SERVICE_TITLE} from '../util/constants';

// const createData = () => {
//   return (
//     {
//       drone: {
//         name: "drone-001",
//         maxWeight: 40
//       },
//       trips: [
//         [
//           {
//             name: "location-001",
//             weight: 16
//           },
//           {
//             name: "location-002",
//             weight: 14
//           },
//           {
//             name: "location-009",
//             weight: 5
//           },
//           {
//             name: "location-018",
//             weight: 5
//           }
//         ],
//         [
//           {
//             name: "location-044",
//             weight: 16
//           },
//           {
//             name: "location-046",
//             weight: 16
//           },
//           {
//             name: "Cottonwood",
//             weight: 8
//           }
//         ]
//       ]
//     }
//   )
// };
// function createData(name, maxweight, count, trips) {
//   return {
//       name,
//       maxweight,
//       count,
//       trips,
//       deliveries: [
//         {
//           trip: 1,
//           locations: [        
//           {
//               location: 'Location #1',
//               weight: 33,
//           },
//           {
//               location: 'Location #2',
//               weight: 12,
//           },
//         ]
//         }
//         ,    
//         [        
//           {
//               location: 'Location #1',
//               weight: 33,
//           },
//           {
//               location: 'Location #2',
//               weight: 12,
//           },
//         ]    

//       ],

//   };
// }

// deliveries: [
//   {
//       location: 'Location #1',
//       weight: 33,
//   },
//   {
//       location: 'Location #2',
//       weight: 12,
//   },
// ],



export const DeliveryService = () => {
  const requestParams = { org: 'Welltrax' };
  const responseData = getAllDroneDeliveriesByOrg(requestParams);
  // console.log(">>>> responseData >>>> ", responseData);
  return (
    <Container>
      <Box sx={{ my: 6 }} style={{ textAlign: 'center', marginTop: 15 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {DELIVERY_SERVICE_TITLE}
        </Typography>
      </Box>
      <Drones data={responseData} />
    </Container>
  );
};