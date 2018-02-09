import { TableHelper } from './table';
import { DateHelper } from './date';

export class Helper {
    static table() {
        return new TableHelper.Table();
    }
    static usefulDay() {
        return new DateHelper.UsefulDay();
    }
}

