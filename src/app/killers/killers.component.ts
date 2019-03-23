import { Component, OnInit } from '@angular/core';
import { KillerModel } from '../model/killer.model';
import { RankingService } from '../services/ranking.service';
import { isNullOrUndefined } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-killers',
  templateUrl: './killers.component.html',
  styleUrls: ['./killers.component.css']
})
export class KillersComponent implements OnInit {

  killers: KillerModel[];
  buttonDisabled = true;

  constructor(private rankingService: RankingService) {
  }

  ngOnInit() {
    this.initListeners();
  }

  private initListeners(): void {
    this.rankingService
      .list()
      .then((killersResponse: KillerModel[]) => {
        this.killers = killersResponse;
      })
      .catch((error: HttpErrorResponse) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        this.buttonDisabled = isNullOrUndefined(this.killers) ? true : false;
      });
  }
}
