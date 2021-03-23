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
    if (req.url.indexOf('@openjobs-api') !== -1) {
      url = req.url.replace('@openjobs-api', environment.urlToApi);
    }
    if (req.url.indexOf('@openjobs-api/auth') !== -1) {
      url = req.url.replace(
        '@openjobs-api/auth',
        environment.urlToAuthenticate
      );
    }

    cloneRequest = req.clone({
      url,
      setHeaders: headers,
    });

    return next.handle(cloneRequest);
  }
}
