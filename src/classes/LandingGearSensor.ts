import { LandingGear } from './../constants';

export class LandingGearSensor {

    private _currentLandingGearState: LandingGear;

    constructor(currentLandingGearState: LandingGear) {
        this._currentLandingGearState = currentLandingGearState;
    }

    public get value() {
        return this._currentLandingGearState;
    }

    public set value(value: LandingGear) {
        this._currentLandingGearState = value;
    }
  }