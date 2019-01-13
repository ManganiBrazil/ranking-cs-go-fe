import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { RankingModel } from '../model/ranking.model';
import { KillerModel } from '../model/killer.model';

const RANKING_URL = 'http://localhost:8080/cs/go/ranking';
const RANKING_WEAPONS_URL = 'http://localhost:8080/cs/go/ranking/weapon';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {
  }

  list(): Promise<Array<KillerModel>> {
    return this.http
      .get(RANKING_URL)
      .pipe(map((response: RankingModel) => {
        return response.ranking;
      }))
      .toPromise();
  }
}
