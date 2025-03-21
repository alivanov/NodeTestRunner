export class CrosswindSensor {

    private _currentCrosswind: number;

    constructor(currentCrosswind: number) {
        this._currentCrosswind = currentCrosswind;
    }

    public get value() {
        return this._currentCrosswind;
    }

    public set value(value: number) {
        this._currentCrosswind = value;
    }
  }