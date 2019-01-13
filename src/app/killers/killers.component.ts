import { Component, OnInit } from '@angular/core';
import { KillerModel } from '../model/killer.model';
import { RankingService } from '../services/ranking.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-killers',
  templateUrl: './killers.component.html',
  styleUrls: ['./killers.component.css']
})
export class KillersComponent implements OnInit {

  killers: Array<KillerModel>;
  buttonDisabled = true;

  constructor(private rankingService: RankingService) {
  }

  ngOnInit() {
    this.listar();
  }

  private listar(): void {
    this.rankingService
      .list()
      .then((killersResponse: Array<KillerModel>) => {
        this.killers = killersResponse;
      })
      .catch((error: any) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        this.buttonDisabled = isNullOrUndefined(this.killers) ? true : false;
      });
  }
}
