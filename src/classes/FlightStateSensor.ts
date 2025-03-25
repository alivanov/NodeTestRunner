import { FlightState } from './../constants';

export class FlightStateSensor {

    private _currentFlightState: FlightState;

    constructor(currentFlightState: FlightState) {
        this._currentFlightState = currentFlightState;
    }

    public get value() {
        return this._currentFlightState;
    }

    public set value(value: FlightState) {
        this._currentFlightState = value;
    }
  }