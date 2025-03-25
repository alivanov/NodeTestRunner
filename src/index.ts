import { LandingGearSensor } from './classes/LandingGearSensor';
import { CrosswindSensor } from './classes/CrosswindSensor';
import { FlapsSensor } from './classes/FlapsSensor';
import { FlightStateSensor } from './classes/FlightStateSensor';
import { LandingGear, Flaps, FlightState } from './constants';
import {
    getCrosswindSensorValue,
    getLandingGearSensorValue,
    getFlapsSensorValue
} from './helpers';

const goToSecondApproach = (ls: LandingGearSensor, fs: FlapsSensor, cs: CrosswindSensor, fss: FlightStateSensor): number => {
    if (getLandingGearSensorValue(ls) == LandingGear.ON || getFlapsSensorValue(fs) == Flaps.ON) {
        if (getCrosswindSensorValue(cs) > 10) {
            fss.value = FlightState.SECONDAPPROACH;
        } else {
            fss.value = FlightState.LANDED
        }
    }

    return 0;
}

export { goToSecondApproach }