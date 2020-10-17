import React from 'react';

function getGeoLocation() {
    window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
}

const successfulLookup = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
}

export default getGeoLocation;

