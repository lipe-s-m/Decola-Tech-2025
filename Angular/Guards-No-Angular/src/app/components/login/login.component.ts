import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  login(): void {
    this.loginService.login();
    alert('Logado');
  }
  logout(): void {
    this.loginService.logout();
    alert('Deslogado');
  }
}
