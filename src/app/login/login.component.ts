import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AutenthicationService } from '../services/autenthication.service';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { UrlEnum } from '../enum/url.enum';
import { Validator } from 'class-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: NgForm;

  user: UserModel = <UserModel>({});
  errorMsg: string;

  constructor(
    private authService: AutenthicationService,
    private router: Router,
    private validator: Validator
  ) {}

  ngOnInit() { }

  login(): void {

    this.errorMsg = undefined;

    if (!this.authService.find(this.user)) {
      this.errorMsg = 'Invalid login!';
      return;
    }

    this.router.navigate([UrlEnum.KILLERS]);
  }

  isNumber(keyBoardEvent: KeyboardEvent): void {

    const validNumber = this.validator.isNumberString(keyBoardEvent.key);

    if (!validNumber) {
      this.user.id = undefined;
    }
  }

  click(): void {
    alert("OK");
  }
}
