import {
    getAllDroneSquadDeliveries
} from '../../api/Endpoints';

it('tests the endpoint', async () => {
    const result = getAllDroneSquadDeliveries(2);
    expect(result).toBeDefined();
});

it('tests getAllDroneSquadDeliveries to have 10 deliveries', async () => {
    const result = await getAllDroneSquadDeliveries(2);
    expect(result.length).toEqual(10);
});
