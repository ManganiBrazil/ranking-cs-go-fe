import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AutenthicationService } from '../services/autenthication.service';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import { UrlEnum } from '../enum/url.enum';
import { Validator } from 'class-validator';
import { PriceService } from '../services/price.service';
import { AjaxPrice } from '../model/ajax-price.model';
import { HttpErrorResponse } from '@angular/common/http';

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
  ajaxPrices = [];

  constructor(
    private authService: AutenthicationService,
    private router: Router,
    private validator: Validator,
    private priceService: PriceService
  ) {}

  async ngOnInit() {

    for(var i = 0; i < 5; i++) {

      setTimeout(async() => {
        const ajaxPrice = await this.priceService.find(362496);
        this.ajaxPrices.push(ajaxPrice)
      }, 1000);


    }
  }

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
}
