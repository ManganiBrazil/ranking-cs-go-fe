import { Component, OnInit } from '@angular/core';
import { KillerModel } from '../model/killer.model';
import { RankingService } from '../services/ranking.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-killers',
  templateUrl: './killers.component.html',
  styleUrls: ['./killers.component.css']
})
export class KillersComponent implements OnInit {

  killers: KillerModel[];

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
        this.killers = [];
      });
  }
}
