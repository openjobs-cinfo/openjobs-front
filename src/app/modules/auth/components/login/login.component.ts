import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public async handleLogin() {
    try {
      await this.authService.authenticate(this.email, this.password);

      this.route.navigateByUrl('/home');
    } catch (error) {
      console.log('ERRO: ', error);
    }
  }

  public async handleRegister() {
    this.route.navigateByUrl('/user/register/simple');
  }

  public async handleRecoverPassword() {
    this.route.navigateByUrl('/auth/recover-password');
  }
}
