import { CrosswindSensor } from './classes/CrosswindSensor';
import { LandingGearSensor } from './classes/LandingGearSensor';
import { FlapsSensor } from './classes/FlapsSensor';
import { LandingGear, Flaps } from './constants';

const getLandingGearSensorValue = (ls: LandingGearSensor, condition1?: boolean, condition2?: boolean): LandingGear => {
    if (condition1 || condition2) {
        return LandingGear.ON
    } else {
        return ls.value
    }
}

const getFlapsSensorValue = (fs: FlapsSensor): Flaps => {
    return fs.value
}

const getCrosswindSensorValue = (cs: CrosswindSensor): number => {
    return cs.value
}

export {
    getLandingGearSensorValue,
    getFlapsSensorValue,
    getCrosswindSensorValue
}