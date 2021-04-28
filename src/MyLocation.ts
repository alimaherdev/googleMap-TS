import {LocationInApp} from "./CustomMap";

let myLocation: LocationInApp;
navigator.geolocation.getCurrentPosition(getMyLocation);

function getMyLocation(position: GeolocationPosition) {
    myLocation = {
        location: {lat: position.coords.latitude, lng: position.coords.longitude}
    };
    console.log(myLocation);
}


