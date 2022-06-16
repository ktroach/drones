import drones from './drones.json';
import locations from './locations.json';
import {getSqaudDeliveries} from './backend';

export const getAllDroneDeliveries = async () => {
    const response = await getSqaudDeliveries(drones, locations, 2);
    return response;
};