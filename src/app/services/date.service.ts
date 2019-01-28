import { Injectable } from '@angular/core';
import { DateType } from '../enum/date-type.enum';

@Injectable()
export class DateService {

  private anoAtual: number;

  private readonly MES_INICIAL = 1;
  private readonly MES_FINAL = 12;

  private readonly ANO_INICIAL = 1900;

  constructor() {
    this.anoAtual = new Date().getFullYear();
  }

  validate(data: string,
           dateType: DateType): boolean {

    switch (dateType) {
      case DateType.MES_ANO:
        return this.validarAnoMes(data);

      case DateType.ANO:
        return this.anoValido(data);

      default:
        return false;
    }

    return false;
  }

  private validarAnoMes(data: string): boolean {

    const values = data.split('/');
    const mes = values[0];
    const ano = values[1];

    return this.mesValido(mes) && this.anoValido(ano);
  }

  private mesValido(mes: string): boolean {
    return Number(mes) > this.MES_INICIAL && Number(mes) <= this.MES_FINAL;
  }

  private anoValido(ano: string): boolean {
    return Number(ano) >= this.ANO_INICIAL && Number(ano) <= this.anoAtual;
  }
}
