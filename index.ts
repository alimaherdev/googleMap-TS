import {CustomMap} from './src/CustomMap';
import {UserClass} from './src/User.class';
import {CompanyClass} from './src/Company.class';


const newCustomMap = new CustomMap('google-map');
const user = new UserClass();
const company = new CompanyClass();

newCustomMap.addMapMarker(user);
newCustomMap.addMapMarker(company);



