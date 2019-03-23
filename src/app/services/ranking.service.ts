import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { RankingModel } from '../model/ranking.model';
import { KillerModel } from '../model/killer.model';
import { UrlEnum } from '../enum/url.enum';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private readonly RANKING_URL = UrlEnum.RANKING_URL;

  constructor(private http: HttpClient) {}

  list(): Promise<Array<KillerModel>> {
    return this.http
      .get(this.RANKING_URL)
      .pipe(map((response: RankingModel) => {
        return response.ranking;
      }))
      .toPromise();
  }
}
