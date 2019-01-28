import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { DateType } from '../enum/date-type.enum';
import { DateService } from '../services/date.service';

@Directive({
  selector: '[dateValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})
export class DateValidatorDirective implements Validator {

  private readonly MES_ANO_REGEX = /^\d{2}[/]\d{4}$/;
  private readonly ANO_REGEX = /^\d{4}$/;

  constructor(
    private dateService: DateService
  ) { }

  validate(control: AbstractControl): ValidationErrors | null {

    const tipoData = this.defineType(control.value);

    const dataInvalida = !this.dateService
      .validate(
        control.value,
        tipoData
      );

    return dataInvalida ? {'dataInvalida': {value: control.value}} : null;
  }

  private defineType(date: string): DateType {

    if (!date) {
      return DateType.INVALIDO;
    }

    if (date.match(this.MES_ANO_REGEX)) {
      return DateType.MES_ANO;
    }

    if (date.match(this.ANO_REGEX)) {
      return DateType.ANO;
    }
  }
}
