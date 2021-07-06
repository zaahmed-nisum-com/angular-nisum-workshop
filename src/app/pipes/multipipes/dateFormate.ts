import { Pipe } from '@angular/core';
import moment from 'moment';

/**
 * pipe to dateFormate full month in words/fullyear in number/fulldate in words
 */
@Pipe({ name: 'dateFormateInWordsMYD' })
export class DateFormateInWordsMYD{
    transform(value: string): string {
        return moment(new Date).format('MMMM YYYY dddd');
    }
}