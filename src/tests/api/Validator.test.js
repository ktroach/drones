import {
    validateInputs, 
    validateSquadSize, 
    validateArray, 
    validateValue
} from '../../api/Validator';

import drones from '../testdata/drones.json';
import locations from '../testdata/locations.json';

it('tests the validateInputs', () => {
    const result = validateInputs(drones, locations, 2);
    expect(result).toBeTruthy();
});

it('tests validateSquadSize to allow 100 drones', () => {
    const result = validateSquadSize(drones);
    expect(result).toBeTruthy();
});

it('tests validateSquadSize to disallow 101 drones', () => {
    let data = [];
    for (let i = 0 ; i < 101; i++) {
        const drone = {
            name: `drone-${i}`, 
            weight: i*10
        }
        data.push(drone);
    }
    const result = validateSquadSize(data);
    expect(result).toBeFalsy();
});

it('tests validateArray to allow array of values', () => {
    const values = ['drone-1', 'drone-2', 'drone-3'];
    const result = validateArray(values);
    expect(result).toBeTruthy();
});

it('tests validateArray to disallow empty array', () => {
    const values = [];
    const result = validateArray(values);
    expect(result).toBeFalsy();
});

it('tests validateValue to allow valid value', () => {
    const value = 2;
    const result = validateValue(value);
    expect(result).toBeTruthy();
});

it('tests validateValue to disallow undefined value', () => {
    const value = undefined;
    const result = validateValue(value);
    expect(result).toBeFalsy();
});

it('tests validateValue to disallow invalid value', () => {
    const value = -1;
    const result = validateValue(value);
    expect(result).toBeFalsy();
});