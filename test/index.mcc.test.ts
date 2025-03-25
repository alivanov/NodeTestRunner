import { CrosswindSensor } from '../src/classes/CrosswindSensor';
import { FlapsSensor } from '../src/classes/FlapsSensor';
import { LandingGearSensor } from '../src/classes/LandingGearSensor';
import { FlightStateSensor } from '../src/classes/FlightStateSensor';
import { sensorFactory } from '../src/classes';
import { goToSecondApproach } from '../src/index';
import { Flaps, LandingGear, FlightState } from './../src/constants';

import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('goToSecondApproach', () => {
  /**
   * TC 1:
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 20
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('LandingGear.ON && Flaps.ON: FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = 20;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });

  /**
   * TC 2:
   * - LandingGear.OFF
   * - Flaps.ON
   * - Crosswind == 20
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('LandingGear.OFF && Flaps.ON: FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = 20;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.OFF}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });

  /**
   * TC 3:
   * - LandingGear.ON
   * - Flaps.OFF
   * - Crosswind == 20
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('LandingGear.ON && Flaps.OFF: FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = 20;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.OFF}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });

  /**
   * TC 4:
   * - LandingGear.OFF
   * - Flaps.OFF
   * - Crosswind == 20
   * EXPECTED:
   * - FlightState is unchanged
   * - function returns 0
   */
  it('LandingGear.OFF && Flaps.OFF: FlightStateSensor indicates the airplane should continue the flight', () => {
    const INITIAL_CROSSWIND = 20;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.OFF}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.OFF}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.CRUISE);
  });

  /**
   * TC 5:
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 5
   * EXPECTED:
   * - FlightState.LANDED
   * - function returns 0
   */
  it('LandingGear.ON && Flaps.ON: FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = 5;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

});