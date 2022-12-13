import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ERROR_NOT_EXIST_FIELDS = 'Two fields must be required';

/**
 * support for formGroup type password for confirmation
 * @param fieldName: string
 * @param confirmFieldName: string
 * @returns ValidatorFn
 */
export const validateNotMatch = (fieldName: string, confirmFieldName: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    const group = control.parent as FormGroup;
    const fieldControl = group.get(fieldName) as FormControl;
    const confirmFieldControl = group.get(confirmFieldName) as FormControl;

    if (!fieldControl || !confirmFieldControl) {
      throw new Error(ERROR_NOT_EXIST_FIELDS);
    }

    return fieldControl.value === confirmFieldControl.value ? null : {
      validateNotMatch: {
        valid: false
      }
    };
  };
};
