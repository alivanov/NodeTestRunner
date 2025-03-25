import { AltitudeSensor } from './AltitudeSensor';
import { CrosswindSensor } from './CrosswindSensor';
import { LandingGearSensor } from './LandingGearSensor';
import { FlightStateSensor } from './FlightStateSensor';
import { FlapsSensor } from './FlapsSensor';
import { FlightState } from './../constants';

type SensorParams = 
    | { type: 'altitude' | 'crosswind' | 'gear' | 'flaps', value: number }
    | { type: 'flight', value: FlightState };

const assertNever = (x: never): never => {
    throw new Error(`Unexpected value: ${x}`);
}

class SensorsFactory {
    public create(params: SensorParams) {
        switch (params.type) {
            case 'altitude':
                return new AltitudeSensor(params.value);
            case 'crosswind':
                return new CrosswindSensor(params.value);
            case 'gear':
                return new LandingGearSensor(params.value);
            case 'flaps':
                return new FlapsSensor(params.value);
            case 'flight':
                return new FlightStateSensor(params.value);
            default:
                return assertNever(params);
        }
    }
}

const sensorFactory = new SensorsFactory()

export {
    sensorFactory
} 