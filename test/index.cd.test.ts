import { getLandingGearSensorValue } from '../src/helpers';
import { LandingGearSensor } from '../src/classes/LandingGearSensor';
import { sensorFactory } from '../src/classes';
import { LandingGear } from './../src/constants';

import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('getLandingGearSensorValue', () => {
  /**
   * TC 1:
   * - condition1 == true
   * - condition2 == true
   * EXPECTED:
   * - LandingGear.ON
   */
  it('forces LandingGear.ON', () => {
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.OFF}) as LandingGearSensor;
    assert.equal(getLandingGearSensorValue(landingGearSensor, true, true), LandingGear.ON);
  });

  /**
   * TC 2:
   * - condition1 == false
   * - condition2 == false
   * EXPECTED:
   * - LandingGear.OFF
   */
  it('returns current LandingGear state', () => {
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.OFF}) as LandingGearSensor;
    assert.equal(getLandingGearSensorValue(landingGearSensor, false, false), LandingGear.OFF);
  });
});