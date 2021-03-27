import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-registration',
  templateUrl: './simple-registration.component.html',
  styleUrls: ['./simple-registration.component.scss'],
})
export class SimpleRegistrationComponent implements OnInit {
  public fullName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  public async handleRegister() {
    this.route.navigateByUrl('/home');
  }
}
