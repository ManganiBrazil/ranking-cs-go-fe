import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AutenthicationService } from '../services/autenthication.service';
import { Router } from '@angular/router';
import { UrlEnum } from '../enum/url.enum';
import { DateType } from '../enum/date-type.enum';
import { NgForm } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

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
    this.loginForm
      .valueChanges
      .subscribe((form: {username: string, password: string, birthdate: string}) => {
        console.warn('form -> ', form);
        console.warn('loginForm antes validarNascimentoMangani', this.loginForm.invalid);
        this.validarNascimentoMangani(form);
        console.warn('loginForm apos validarNascimentoMangani', this.loginForm.invalid);
    });
  }

  private validarNascimentoMangani(form: {username: string, password: string, birthdate: string}): void {

    if (this.loginForm && this.loginForm.controls && this.loginForm.controls['birthdate']) {

      if ('01/1978' !== form.birthdate) {
        this.loginForm.controls['birthdate'].setErrors({'dataInvalida': 'dataInvalida'});

      } else {
        this.loginForm.controls['birthdate'].setErrors(null);

      }
    }
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
