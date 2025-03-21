import { AltitudeSensor } from './classes/AltitudeSensor';
import { CrosswindSensor } from './classes/CrosswindSensor';

const getAltitudeSensorValue = (as: AltitudeSensor): number => {
    return as.value
}

const getCrosswindSensorValue = (cs: CrosswindSensor): number => {
    return cs.value
}

const isWarningSignalOn = (as: AltitudeSensor, cs: CrosswindSensor): boolean => {
    return getAltitudeSensorValue(as) >= 200 && getAltitudeSensorValue(as) < 300 || getCrosswindSensorValue(cs) > 20
}

export { isWarningSignalOn }