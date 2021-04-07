import {
  Component,
  OnChanges,
  OnInit,
  AfterViewChecked,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent
  implements OnInit, AfterViewChecked, OnChanges, OnDestroy {
  public userAuthenticated: any;
  subscription: Subscription;
  userN: Subscription;

  message: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.userAuthenticated = authService.currentUser;
    this.authService.usD.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.authService.userAuthenticated.subscribe();
    this.authService.usD.subscribe();
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
    this.authService.currentUser.subscribe((user) => {
      this.userAuthenticated = user;
    });
    this.subscription = this.authService.getUser().subscribe((message) => {
      this.userAuthenticated = message;
    });
    this.userN = this.authService.getUser2().subscribe((m) => {
      this.message = m;
    });
    this.authService.usD.subscribe((a) => {});
  }

  handleNavigateHome() {
    if (this.authService.userAuthenticated.value) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/auth');
    }
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

  updateUser2() {
    this.authService.updateUser2(new Date().getTime());
  }
  updateUser() {
    this.authService.updateUser(new Date().getTime());
  }
}
