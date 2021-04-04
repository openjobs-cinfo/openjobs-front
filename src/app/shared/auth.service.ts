import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface OAuth {
  refresh: string;
  access: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public authenticate(email: string, password: string): Observable<OAuth> {
    return this.httpClient
      .post<OAuth>('@openjobs-api/auth', {
        email,
        password,
      })
      .pipe(retry(1), catchError(this.processError));
  }

  private processError(err) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
