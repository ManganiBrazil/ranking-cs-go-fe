import { Component, OnInit } from '@angular/core';
import { Status } from './enum/status.enum';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {

  state: Status = Status.INFO;

  states = [
    {id: Status.INFO, value: 'INFO'} ,
    {id: Status.WARNING, value: 'WARNING'},
    {id: Status.SUCCESS, value: 'SUCCESS'}
  ];

  readonly INFO = Status.INFO;
  readonly WARNING = Status.WARNING;
  readonly SUCCESS = Status.SUCCESS;

  constructor() { }

  ngOnInit() {
  }

  choose(): void {
    console.log(this.state);
  }
}
