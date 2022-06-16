import {dataFile} from './001';

export const ingestData = async (cb) => {
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

    cb(null, drones, locations);
    return cb;
}


