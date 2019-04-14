import {ValidationErrors, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl, FormGroup} from '@angular/forms/src/model';

export function validPlanet(control: AbstractControl): ValidationErrors | null {
  console.log('validPlanet', control.value);
  if (validPlanets.includes(control.value)) {
    return null;
  }
  return {
    validPlanet: {
      actualValue: control.value,
      acceptableValues: validPlanets
    }
  }
}

export function isEqual(controlNames: string[]): ValidatorFn {
  return (group: FormGroup): ValidationErrors | null => {
    if (group.get(controlNames[0]).value === group.get(controlNames[1]).value) {
      return null;
    }
    return {
      isEqual: {
        controlNames
      }
    };
  }
}


export function validListFactory(list: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('validList', control.value);
    if (list.includes(control.value)) {
      return null;
    }
    return {
      validList: {
        actualValue: control.value,
        acceptableValues: list
      }
    }
  }
}

const validPlanets = [
  'Merkur',
  'Venus',
  'Erde',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptun'
];
