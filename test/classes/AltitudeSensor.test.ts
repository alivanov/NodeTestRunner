import { sensorFactory } from '../../src/classes';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('AltitudeSensor', () => {
  it('constructs an object with the initial altitude value', () => {
    const INITIAL_ALTITUDE = 10;
    const altitudeSensor = sensorFactory.create('altitude', INITIAL_ALTITUDE);
    assert.equal(altitudeSensor.value, INITIAL_ALTITUDE);
  });

  it('updates the altitude', () => {
    const INITIAL_ALTITUDE = 10;
    const altitudeSensor = sensorFactory.create('altitude', INITIAL_ALTITUDE);
    altitudeSensor.value = 100;
    assert.equal(altitudeSensor.value, 100);
  });
});