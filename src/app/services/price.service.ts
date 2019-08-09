import { Injectable } from '@angular/core';
import { AjaxPrice } from '../model/ajax-price.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { AjaxPriceEnum } from '../enum/ajax-price.enum';
import { Validator } from 'class-validator';
import { map } from 'rxjs/operators';

/**
 * @description
 * Service for price.
 */
@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private readonly NO_HEADER = undefined;

  constructor(
    private http: HttpClient,
    private validator: Validator
  ) { }

  /**
   * @description
   * Find discount price.
   * @param productId - Product id.
   * @param partNumber - Partner number.
   */
  find(productId: string | number, partNumber?: string): Promise<AjaxPrice> {

    let params = new HttpParams();

    params = this.configDefaultParams(params);
    params = this.configProductIdParam(params, productId);
    params = this.configPartNumberParam(params, partNumber);

    const options = {
      headers: this.NO_HEADER,
      observe: 'response' as 'body',
      params: params
    };

    return this.http.get('https://www.fastshop.com.br/webapp/wcs/stores/servlet/AjaxPricePromotionsDisplayView', options).pipe(

      map((res: HttpResponse<AjaxPrice>) => {
        return res.body;
      })
    ).toPromise();
  }

  private configDefaultParams(params: HttpParams): HttpParams {

    params = params.set(AjaxPriceEnum.HOTSITE, AjaxPriceEnum.FASTSHOP);
    params = params.set(AjaxPriceEnum.STORE_ID, AjaxPriceEnum.STORE_ID_VALUE);
    return params;
  }

  private configProductIdParam(params: HttpParams, productId: string | number): HttpParams {

    if(this.validator.isNumber(productId)) {
      params = params.set(AjaxPriceEnum.CAT_ENTRY_IDENTIFIER, productId as string);
    }

    return params;
  }

  private configPartNumberParam(params: HttpParams, partNumber: string): HttpParams {

    if(this.validator.isDefined(partNumber)) {
      params = params.set(AjaxPriceEnum.PART_NUMBER, partNumber);
    }

    return params;
  }
}
