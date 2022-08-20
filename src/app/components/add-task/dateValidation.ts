import { AbstractControl } from "@angular/forms";

export class DateValidation {
    static isValid(c:AbstractControl) {
        if(c.value === undefined || c.value === null){
            return {incorrect: true}
        }
        return c.value;
    }
}