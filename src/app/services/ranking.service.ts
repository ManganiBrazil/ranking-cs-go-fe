import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { KillerModel } from '../model/killer.model';
import { UrlEnum } from '../enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private readonly RANKING_URL = UrlEnum.RANKING_URL;

  constructor(private http: HttpClient) {
  }

  list(): Promise<Array<KillerModel>> {
    return this.http
      .get(this.RANKING_URL)
      .pipe(
        map((response: HttpResponse<KillerModel[]>) => {
          return response['ranking'];
        })
      ).toPromise();
  }
}
