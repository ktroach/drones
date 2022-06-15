import drones from './drones.json';
import locations from './locations.json';
import {getDroneDeliveriesByOrg} from './backend';
import {toast} from 'react-toastify';

export const getAllDroneDeliveriesByOrg = (params) => {
    const org = params?.org ? params.org : undefined;
    if (!org) {
        toast.error('Validation Error: Org param is required');
        return [];
    }
    const response = getDroneDeliveriesByOrg(org, drones, locations);
    return response;
};