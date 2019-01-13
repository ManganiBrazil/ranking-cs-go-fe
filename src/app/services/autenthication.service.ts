import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { isNullOrUndefined } from 'util';
import { UrlEnum } from '../enum/url.enum';

const users = [
  {username: 'mangani', password: 'mangani'}
];

@Injectable({
  providedIn: 'root'
})
export class AutenthicationService {

  private readonly USER = 'user';

  constructor(private router: Router) {
  }

  logout(): void {
    localStorage.removeItem(this.USER);
    this.router.navigate([UrlEnum.LOGIN]);
  }

  find(user: UserModel): boolean {

    const found = users.find(u => user.password === u.password && user.username === u.username);

    if (!isNullOrUndefined(found)) {
      localStorage.setItem(this.USER, JSON.stringify(user));
      this.router.navigate([UrlEnum.LOGIN]);
      return true;
    }

    return false;
  }

  checkCredentials(): void {

    if (localStorage.getItem(this.USER)) {
      this.router.navigate([UrlEnum.LOGIN]);
    }
  }
}
