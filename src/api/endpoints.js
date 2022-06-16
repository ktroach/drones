import {getSqaudDeliveries} from './Backend';

export const getAllDroneSquadDeliveries = async (tripLimit) => {
    return await getSqaudDeliveries(tripLimit);
};