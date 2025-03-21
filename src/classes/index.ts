import { AltitudeSensor } from './AltitudeSensor';
import { CrosswindSensor } from './CrosswindSensor';

class SensorsFactory {
    public create(type: string, value: number) {
        switch (type) {
            case 'altitude':
                return new AltitudeSensor(value);
            case 'crosswind':
                return new CrosswindSensor(value);
            default:
                throw new Error(`Unsupported sensor type: ${type}!`);
        }
    }
}

const sensorFactory = new SensorsFactory()

export {
    sensorFactory
} 