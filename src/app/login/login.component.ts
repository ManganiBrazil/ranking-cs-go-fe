import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { AutenthicationService } from '../services/autenthication.service';
import { Router } from '@angular/router';
import { UrlEnum } from '../enum/url.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserModel = {username: '', password: ''};
  errorMsg: String = '';

  constructor(
    private authService: AutenthicationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(): void {
    if (!this.authService.find(this.user)) {
      this.errorMsg = 'Invalid login!';
      this.router.navigate([UrlEnum.LOGIN]);
    }

    this.errorMsg = '';
    this.router.navigate([UrlEnum.HOME]);

  }
}
