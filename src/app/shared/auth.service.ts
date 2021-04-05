import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

interface OAuth {
  refresh: string;
  access: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userAuthenticated: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser = this.userAuthenticated.asObservable();
  public oAuthData: BehaviorSubject<any> = new BehaviorSubject(null);
  public userNew: EventEmitter<any> = new EventEmitter(null);

  constructor(private httpClient: HttpClient) {
    this.recoveryDataFromLocalStorage();
  }

  private loadUserDataFromApi(): Promise<any> {
    return new Promise((res, rej) => {
      this.httpClient
        .get('@openjobs-api/auth/users/me')
        .toPromise()
        .then((data) => {
          const response = data;
          this.setUserData(response);
          return res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  }

  public async authenticate(email: string, password: string): Promise<OAuth> {
    const data = await this.httpClient
      .post<OAuth>('@openjobs-api-oauth', {
        email,
        password,
      })
      .toPromise();
    console.log('AUTH_DATA', data);
    this.setAuthData(data);

    await this.loadUserDataFromApi();

    return data;
  }

  public logout(): void {
    this.userAuthenticated.next(null);
    this.oAuthData.next(null);
    this.userNew.emit(null);
    sessionStorage.removeItem('user_data');
    sessionStorage.removeItem('user_token');
  }

  private recoveryDataFromLocalStorage() {
    let data = sessionStorage.getItem('user_data');
    if (data) {
      data = JSON.parse(data);
      this.setUserData(data);
    }
    data = sessionStorage.getItem('user_token');
    if (data) {
      data = JSON.parse(data);
      this.setAuthData(data);
    }
  }

  private setAuthData(data): void {
    this.oAuthData.next(data);
    sessionStorage.setItem('user_token', JSON.stringify(data));
  }

  private removeAuthData(): void {
    this.oAuthData.next(null);
    sessionStorage.removeItem('user_token');
  }

  private setUserData(data = null): void {
    if (data) {
      this.userAuthenticated.next(data);
      this.userNew.emit(data);
      sessionStorage.setItem('user_data', JSON.stringify(data));
    }
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
