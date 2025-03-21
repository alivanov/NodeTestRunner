import { AltitudeSensor } from '../src/classes/AltitudeSensor';
import { CrosswindSensor } from '../src/classes/CrosswindSensor';
import { sensorFactory } from '../src/classes';
import { isWarningSignalOn } from '../src/index';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('isWarningSignalOn', () => {
  it('true when the crosswind is greater than 20 meters/sec', () => {
    const INITIAL_CROSSWIND = 40;
    const INITIAL_ALTITUDE = 400;
    const altitudeSensor = sensorFactory.create('altitude', INITIAL_ALTITUDE);
    const crosswindSensor = sensorFactory.create('crosswind', INITIAL_CROSSWIND);
    assert.ok(isWarningSignalOn(altitudeSensor as AltitudeSensor, crosswindSensor as CrosswindSensor));
  });
});