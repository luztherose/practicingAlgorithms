/*
    Map the Debris

    Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
    The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
    You can read about orbital periods on Wikipedia.
    The values should be rounded to the nearest whole number. The body being orbited is Earth.
    The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

*/
function orbitalPeriod(arr) {
    // return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let radius = Math.round(GM / earthRadius);
    const avgAlt = 35873.5553;
    const hoursPerDay = 24;
    const minutesPerHour = 60;
    const secondsPerHour = 3600;
    //average altitude into their orbital periods (in seconds

    console.log(Math.round(((radius * avgAlt) / 60) * 60 / 24))
    return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
