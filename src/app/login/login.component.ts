import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AutenthicationService } from '../services/autenthication.service';
import { Router } from '@angular/router';
import { UrlEnum } from '../enum/url.enum';
import { DateType } from '../enum/date-type.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm: NgForm;

  user: UserModel = <UserModel>({});
  errorMsg: String = '';

  constructor(
    private authService: AutenthicationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(): void {

    console.log(this.loginForm.valid);
/*
    if (!this.authService.find(this.user)) {
      this.errorMsg = 'Invalid login!';
      this.router.navigate([UrlEnum.LOGIN]);
    }

    this.errorMsg = '';
    this.router.navigate([UrlEnum.HOME]);*/

  }
}
