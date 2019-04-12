import { AbstractControl } from '@angular/forms';

/**
 * validation function
 * birth date should be less than 10 years
 * @param control 
 */
export function birthDateValidator(control: AbstractControl) {
    var value = control.value;
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var min = 10;
    if (age > min + 1) {
        return null;
    }
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    var reuslt = age >= min ? null : { 'invalidBirthDate': true };
    return reuslt;
}