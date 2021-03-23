import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  async handleLogin() {
    const result = await this.authService.authenticate(
      this.email,
      this.password
    );
    console.log('RESULTADO', result);
    this.route.navigateByUrl('/home');
  }
}
