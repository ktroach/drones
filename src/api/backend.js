import _ from 'lodash';
import {dataFile} from '../data/001';

export const getSqaudDeliveries = async (tripLimit) => {
    let drones = dataFile[0].split(',').
    reduce((prev, curr, index) => {
      return prev.concat(
        !(index%2) ? { name: curr } :
        ((drone) => {
          drone.maxWeight = curr * 1;
          return drone;
        })(prev.pop())
      );
    }, []);

  let locations = dataFile.slice(1).
    filter(item => item).
    map(item => {
      return item.split(',').
        reduce((name, weight) => ({
          name: name,
          weight: weight*1
        }));
    });

    return await computeDroneSqaudDeliveries(drones, locations, tripLimit); 
};

export const computeDroneSqaudDeliveries = async (drones, locations, tripLimit) => {
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
