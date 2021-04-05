import {
  Component,
  OnChanges,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewChecked, OnChanges {
  public userAuthenticated: boolean;

  constructor(
    private router: Router,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    this.authService.currentUser.subscribe((user) => {
      console.log('USER HERE', user);
      this.userAuthenticated = user;
    });
    console.log(
      'LOGA ESSA DESGRAÇA AQUIIII PORRAAA',
      this.authService.userAuthenticated.value,
      this.authService.oAuthData.value
    );
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  // a() {
  // this.authService.userAuthenticated.subscribe((user) => {
  //   console.log('USER HERE', user);
  //   this.userAuthenticated = user;
  // });
  // console.log(
  //   'LOGA ESSA DESGRAÇA AQUIIII PORRAAA',
  //   this.authService.userAuthenticated.value,
  //   this.authService.oAuthData.value
  // );
  // }

  ngOnInit(): void {
    //  = !!this.authService.userAuthenticated.value;
  }

  handleNavigateHome() {
    this.router.navigateByUrl('/home');
  }

  handleNavigateAuth() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  handleNavigateAboutUs() {
    this.router.navigateByUrl('/auth/about');
  }

  handleNavigateProfile() {
    this.router.navigateByUrl('/user/profile');
  }

  subscribe() {}
}
