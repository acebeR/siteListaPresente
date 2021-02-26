import { Login } from 'src/app/login/login';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private loginSource = new BehaviorSubject({ login: Login, key: '' });
  currentLogin = this.loginSource.asObservable();

  constructor() { }

  changeLogin(presente:  Login, key: string) {
    this.loginSource.next({login: Login, key: key });
  }
}
