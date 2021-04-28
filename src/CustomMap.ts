import Animation = google.maps.Animation;
import {MapViewModel} from "./models";

export class CustomMap {
    private readonly googleMap: google.maps.Map;

    constructor(public viewElID: string,) {
        this.googleMap = new google.maps.Map(
            document.getElementById(this.viewElID),
            {
                zoom: 1,
                center: {lat: 0, lng: 0}
            }
        )
    }


    public addMapMarker(markerRequirement: MapViewModel): void {
        this.MarkerHandler(markerRequirement);
    }

    private MarkerHandler(markerRequirement: MapViewModel): google.maps.Marker {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: markerRequirement.location,
            animation: Animation.BOUNCE,
            icon: markerRequirement.MapIcon
        });
        marker.addListener('click', this.infoWindowHandler.bind(this, marker, markerRequirement.InfoWindowContent()));
        return marker;
    }

    private infoWindowHandler(marker: google.maps.Marker, content: string | Node): void {
        console.log(content)
        const infoWindow = new google.maps.InfoWindow({
            content
        })
        infoWindow.open(this.googleMap, marker);
    }
}



