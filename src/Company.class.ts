import {company, address} from 'faker';
import {MapViewModel} from "./models";

export class CompanyClass implements MapViewModel {
    constructor(
        public companyName: string = company.companyName(),
        public catchPhrase: string = company.catchPhrase(),
        public location: { lat: number; lng: number } = {
            lat: +address.latitude(),
            lng: +address.longitude()
        }
    ) {
    }


    public InfoWindowContent(): string {
        return `company ${this.companyName}`;
    }
}
