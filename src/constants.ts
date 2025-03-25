enum LandingGear {
    ON = 1,
    OFF = 2
}

enum Flaps {
    ON = 1,
    OFF = 2
}

enum FlightState {
    CRUISE = 'Cruise',
    APPROACH = 'Approach',
    SECONDAPPROACH = 'Second Approach',
    TAXI = 'Taxi',
    LANDED = 'Landed'
}

export { LandingGear, Flaps, FlightState }