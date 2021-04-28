import {name, address} from 'faker';
import {MapViewModel} from "./models";

export class UserClass implements MapViewModel {
    constructor(
        public userName: string = name.firstName(),
        public location: { lat: number; lng: number } = {
            lat: +address.latitude(),
            lng: +address.longitude()
        }
    ) {
    }

    public InfoWindowContent(): string {
        return `user: ${this.userName}`;
    }
}
