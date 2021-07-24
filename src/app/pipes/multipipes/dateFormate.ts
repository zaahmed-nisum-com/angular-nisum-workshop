import { Pipe } from '@angular/core';
import moment from 'moment';

/**
 * pipe to dateFormate full month in words/fullyear in number/fulldate in words
 */
@Pipe({ name: 'DateFormate' })
export class DateFormate {
    transform(value: any, label: string): any {
        if (label == "MYD") {
            return moment(new Date).format('MMMM YYYY dddd');
        }
        if (label == "HM") {
            return moment(new Date).format('HH:mm:ss');
        }
    }
}

