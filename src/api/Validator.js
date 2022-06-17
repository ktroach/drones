import { toast } from 'react-toastify';
import { 
  SQUAD_SIZE_LIMIT, 
  SQUAD_SIZE_LIMIT_EXCEEDED, 
  INVALID_ARRAY, 
  INVALID_VALUE 
} from '../util/constants';

export const validateInputs = (drones, locations, tripLimit) => {
    // the number of drones in the squad cannot exceed the squad limit setting  
    if (!validateSquadSize(drones)) {
      return false;
    }
    // drones must be hydrated 
    if (!validateArray(drones)) {
      return false;
    }
    // locations must be hydrated 
    if (!validateArray(locations)) {
      return false;
    }
    // tripLimit must be valid 
    if (!validateValue(tripLimit)) {
      return false;
    }
    return true;
};

export const validateSquadSize = (drones) => {
  if (drones.length > SQUAD_SIZE_LIMIT) {
    toast.error(SQUAD_SIZE_LIMIT_EXCEEDED);
    console.warn(SQUAD_SIZE_LIMIT_EXCEEDED);
    return false;
  }
  return true;
};

export const validateArray = (arr) => {
  if (!arr || arr.length === 0) {
    toast.error(INVALID_ARRAY);
    console.warn(INVALID_ARRAY);    
    return false;
  }
  return true;
};

export const validateValue = (val) => {
  if (!val || val < 1) {
    toast.error(INVALID_VALUE);
    console.warn(INVALID_VALUE);    
    return false;
  }
  return true;
};