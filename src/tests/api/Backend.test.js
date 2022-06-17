import {
    getSqaudDeliveries, 
    computeDroneSqaudDeliveries, 
    hasCapacity
} from '../../api/Backend';

import drones from '../testdata/drones.json';
import locations from '../testdata/locations.json';

it('tests the backend', () => {
    const result = getSqaudDeliveries(2);
    expect(result).toBeDefined();
});

it('tests getSqaudDeliveries to have 10 deliveries', async () => {
    const result = await getSqaudDeliveries(2);
    expect(result.length).toEqual(10);
});

it('tests computeDroneSqaudDeliveries to have deliveries', async () => {
    const result = await computeDroneSqaudDeliveries(drones, locations, 2);
    expect(result).toBeDefined();
    expect(result.length).toEqual(10);
});

it('tests hasCapacity returns true when there is enough capacity on the drone', () => {
    const result = hasCapacity(30, 40, 8);
    expect(result).toBeTruthy();
});

it('tests hasCapacity returns true when there is Not enough capacity on the drone', () => {
    const result = hasCapacity(30, 40, 12);
    expect(result).toBeFalsy();
});
