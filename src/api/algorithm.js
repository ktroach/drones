import _ from 'lodash';

export const getSqaudDeliveries = async (drones, locations, tripLimit) => {
    let deliveries = [];
    for (let d in drones) {
        let drone = drones[d];
        drone.currentWeight = 0;
        drone.trips = [];
        const maxWeight = drone.maxWeight;
        let i = 0;
        let tripNumber = 1;
        let reachedCapacity = false;
        let deliveriesCompleted = false;
        while (!deliveriesCompleted) {
            const location = locations[i];
            if (!location?.delivered) { 
                const locationWeight = location.weight;
                if (hasCapacity(drone.currentWeight, maxWeight, locationWeight)) {
                    drone.currentWeight += locationWeight;
                    drone.trips.push({ tripNumber: tripNumber, location });
                    locations[i].delivered = true;
                } else {
                    reachedCapacity = true;
                    drone.currentWeight = 0;
                    tripNumber++;
                }
            }
            i++;
            deliveriesCompleted = (reachedCapacity && tripNumber > tripLimit) ? true : false;
        }

        let trips = [];
        if (drone.trips && drone.trips.length > 0) {
            const droneTrips = drone.trips;
            for (let n = 1; n < tripLimit+1; n++) {
                const res = _.filter(droneTrips, {tripNumber: n});
                trips.push(res);
            }
        }

        deliveries.push({
            drone,
            trips
        });
    }
    return deliveries;
};

const hasCapacity = (accumlatedWeight, maxWeight, locationWeight) => {
    const combinedWeight = accumlatedWeight + locationWeight; 
    if (combinedWeight < maxWeight) {
        return true;
    }
    return false;
};