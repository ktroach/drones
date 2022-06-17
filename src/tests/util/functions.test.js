import {
    getCount
} from '../../util/functions';

it('tests the getCount', () => {
    let data = [];
    for (let i = 0 ; i < 10; i++) {
        const drone = {
            name: `drone-${i}`, 
            weight: i*10
        }
        data.push(drone);
    }    
    const result = getCount(data);
    expect(result).toBeDefined();
});


