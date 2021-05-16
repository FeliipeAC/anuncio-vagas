import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsFormsService {
  constructor() {}

  getError(control: FormControl): string {
    if (control.hasError('required')) {
      return 'Required field';
    } else if (control.hasError('minlength')) {
      const min = control.getError('minlength').requiredLength;
      return `The minimum length is ${min} caracteres`;
    } else if (control.hasError('maxlength')) {
      const max = control.getError('maxlength').requiredLength;
      return `The maximum length is ${max} characters`;
    } else if (control.hasError('max')) {
      const max = control.getError('max').max;
      return `The maximum value is ${max}`;
    } else {
      return 'Invalid field';
    }
  }
}
