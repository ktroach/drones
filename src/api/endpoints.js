import {getSqaudDeliveries} from './backend';

export const getAllDroneSquadDeliveries = async (tripLimit) => {
    return await getSqaudDeliveries(tripLimit);
};