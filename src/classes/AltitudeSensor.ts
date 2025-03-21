export class AltitudeSensor {

    private _currentAltitude: number;

    constructor(currentAltitude: number) {
        this._currentAltitude = currentAltitude;
    }

    public get value() {
        return this._currentAltitude;
    }

    public set value(value: number) {
        this._currentAltitude = value;
    }
  }