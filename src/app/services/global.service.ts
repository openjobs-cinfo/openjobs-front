import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService implements HttpInterceptor {
  private authService: AuthService;

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloneRequest: any;
    let url: any;
    let headers: any;

    if (!this.authService) {
      this.authService = this.injector.get(AuthService);
    }

    const oAuthData = this.authService.oAuthData.value;

    if (req.url.indexOf('@openjobs-api-oauth') !== -1) {
      url = req.url.replace(
        '@openjobs-api-oauth',
        environment.urlToAuthenticate
      );
    } else if (req.url.indexOf('@openjobs-api') !== -1) {
      console.log('REQ_URL', req.url);
      url = req.url.replace('@openjobs-api', environment.urlToApi);
      console.log('URL', url);
    }
    const authData = JSON.parse(sessionStorage.getItem('user_token'));

    console.log('OAuthData', oAuthData);
    if (oAuthData) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + oAuthData['access'],
      };
    } else if (authData) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authData['access'],
      };
    }
    cloneRequest = req.clone({
      url,
      setHeaders: headers,
    });

    return next.handle(cloneRequest);
  }
}
