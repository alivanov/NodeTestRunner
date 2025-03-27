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
   * TC 1 (BASE TC):
   * - LandingGear.OFF
   * - Flaps.OFF
   * - Crosswind == 5
   * EXPECTED:
   * - FlightState.CRUISE
   * - function returns 0
   */
  it('LandingGear.ON && Flaps.ON: FlightStateSensor indicates the airplane should continue the flight', () => {
    const INITIAL_CROSSWIND = 5;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.OFF}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.OFF}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.CRUISE);
  });

  /**
   * TC 2 [LLR-204]:
   * - LandingGear.ON
   * - Flaps.OFF
   * - Crosswind == 5
   * EXPECTED:
   * - FlightState.LANDED
   * - function returns 0
   */
  it('LandingGear.ON: FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = 5;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.OFF}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

  /**
   * TC 3 [LLR-203]:
   * - LandingGear.OFF
   * - Flaps.ON
   * - Crosswind == 20
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  //здесь Crosswind и влияние Flaps.ON для уменьшение количества тестовых примеров, тк условие по Flaps.ON и Crosswind не зависят друг от друга
  //TC для первого условия IF со входами True, True не имеет смысла, тк не демонстрирует какое именно воздействие влияет на результат
  it('Flaps.ON && strong Crosswind: FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = 20;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.OFF}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });

  //------------ Testing of boundary conditions

  /**
   * TC 4 [LLR-204]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 9
   * EXPECTED:
   * - FlightState.LANDED
   * - function returns 0
   */
  it('Weak crosswind: FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = 9;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

  /**
   * TC 5 [LLR-204]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 10
   * EXPECTED:
   * - FlightState.LANDED
   * - function returns 0
   */
  it('Medium crosswind: FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = 10;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

  /**
   * TC 6 [LLR-203]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 11
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('Strong crosswind: FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = 11;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });

  /**
   * TC 7 [LLR-204]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == 0
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('No crosswind: FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = 0;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

  //------------ Robustity testing

   /**
   * TC 8 [LLR-204]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == -1
   * EXPECTED:
   * - FlightState.LANDED
   * - function returns 0
   */
  it('Robusity: negative crosswind - FlightStateSensor indicates the airplane should land', () => {
    const INITIAL_CROSSWIND = -1;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.LANDED);
  });

  /**
   * TC 9 [LLR-203]: 
   * - LandingGear.ON
   * - Flaps.ON
   * - Crosswind == Number.MAX_VALUE
   * EXPECTED:
   * - FlightState.SECONDAPPROACH
   * - function returns 0
   */
  it('Robusity: armageddon crosswind - FlightStateSensor indicates the airplane should go to the 2nd approach', () => {
    const INITIAL_CROSSWIND = Number.MAX_VALUE;
    const landingGearSensor = sensorFactory.create({type: 'gear', value: LandingGear.ON}) as LandingGearSensor;
    const flapsSensor = sensorFactory.create({type: 'flaps', value: Flaps.ON}) as FlapsSensor;
    const crosswindSensor = sensorFactory.create({type: 'crosswind', value: INITIAL_CROSSWIND}) as CrosswindSensor;
    const flightStateSensor = sensorFactory.create({type: 'flight', value: FlightState.CRUISE}) as FlightStateSensor;
    assert.equal(goToSecondApproach(landingGearSensor, flapsSensor, crosswindSensor, flightStateSensor), 0);
    assert.equal(flightStateSensor.value, FlightState.SECONDAPPROACH);
  });
});