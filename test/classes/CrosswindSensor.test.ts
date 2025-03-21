import { sensorFactory } from '../../src/classes';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('CrosswindSensor', () => {
  it('constructs an object with the initial crosswind value', () => {
    const INITIAL_CROSSWIND = 10;
    const crosswindSensor = sensorFactory.create('crosswind', INITIAL_CROSSWIND);
    assert.equal(crosswindSensor.value, INITIAL_CROSSWIND);
  });

  it('updates the crosswind', () => {
    const INITIAL_CROSSWIND = 10;
    const crosswindSensor = sensorFactory.create('crosswind', INITIAL_CROSSWIND);
    crosswindSensor.value = 100;
    assert.equal(crosswindSensor.value, 100);
  });
});