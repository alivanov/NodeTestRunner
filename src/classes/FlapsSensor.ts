import { Flaps } from './../constants';

export class FlapsSensor {

    private _currentFlapsState: Flaps;

    constructor(currentFlapsState: Flaps) {
        this._currentFlapsState = currentFlapsState;
    }

    public get value() {
        return this._currentFlapsState;
    }

    public set value(value: Flaps) {
        this._currentFlapsState = value;
    }
  }