import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  login() {
    localStorage.setItem('token', 'mytoken12345');
  }
  logout() {
    localStorage.clear();
  }
}
