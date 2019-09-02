import moment from 'moment';
import nanoid from 'nanoid';

export default class Item {
    constructor(city, timezone) {
        this.id = nanoid();
        this.city = city;
        this.timezone = timezone;
        this.GMT = 60 * timezone;
        this.time = moment(new Date()).utcOffset(this.GMT).format("HH:mm:ss ZZ");
        this.hour = '';
        this.min = '';
        this.sec = '';
    }
}