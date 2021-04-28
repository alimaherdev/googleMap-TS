export interface MapViewModel {
    location: { lat: number; lng: number; }

    InfoWindowContent?(): string | Node;

    MapIcon?: string | google.maps.ReadonlyIcon | google.maps.ReadonlySymbol;
}
