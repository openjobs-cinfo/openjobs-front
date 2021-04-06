import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';

interface OAuth {
  refresh: string;
  access: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userAuthenticated: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser = new Subject();
  public oAuthData: BehaviorSubject<any> = new BehaviorSubject(null);
  public userNew: EventEmitter<any> = new EventEmitter(null);
  public user2 = new Subject();
  public us = new BehaviorSubject(null);
  public usD = this.us.asObservable();

  constructor(private httpClient: HttpClient) {
    this.recoveryDataFromLocalStorage();
    console.log('OAUTH_DATA_CONSTRUCTOR', this.oAuthData.value);
  }

  public getUser2() {
    return this.user2.asObservable();
  }

  public getUser() {
    return this.currentUser.asObservable();
  }

  public updateUser(value) {
    this.currentUser.next(value);
  }

  public updateUser2(value) {
    this.user2.next(value);
  }

  public changeUs(value) {
    this.us.next(value);
  }
  private loadUserDataFromApi(): Promise<any> {
    return new Promise((res, rej) => {
      this.httpClient
        .get('@openjobs-api/auth/users/me')
        .pipe(retry(3))
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

  public async requestFake(email: string, password: string): Promise<OAuth> {
    return new Promise((resolve, reject) => {
      if (email === 'openjobs.cinfo@gmail.com' && password === 'ojcifal@123') {
        resolve({
          refresh:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxODAyMDEyOSwianRpIjoiMjQ5MDVmZTdjMTJiNGIxNTlhODkzMWYxNDc2NzA3N2YiLCJ1c2VyX2lkIjoxfQ.Q58CodYEbeAD0RdL01G2b6TuaJPrHgV8W_5G88DTkC8',
          access:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3NTg5MzI5LCJqdGkiOiI5OTNlNzI3MWRkZGQ0YjZkODQ1OWUzZDdlMDYxNGYwMiIsInVzZXJfaWQiOjF9.-Q8O8ra1RG4jcAGeDiXnYaVj8X7qKw0DEL3YfQeI6Ss',
        });
      } else {
        reject(new Error('Palmirinha não fez certo!!!!'));
      }
    });
  }

  public async requestFakeMe(): Promise<any> {
    return new Promise((resolve) => {
      const response = {
        id: 1,
        email: 'openjobs.cinfo@gmail.com',
        name: 'OpenJobs Admin',
        avatar_url: null,
        address_id: null,
        birth_date: null,
        skills: [],
        qualifications: [],
      };
      this.setUserData(response);
      this.userAuthenticated.next(response);
      this.updateUser2(new Date().getTime());
      this.updateUser(response);
      resolve(response);
    });
  }

  public async authenticate(email: string, password: string): Promise<OAuth> {
    const data = await this.httpClient
      .post<OAuth>('@openjobs-api-oauth', {
        email,
        password,
      })
      .toPromise();
    // const data = await this.requestFake(email, password);

    this.setAuthData(data);
    this.oAuthData.next(data);
    // await this.loadUserDataFromApi();
    const me = await this.requestFakeMe();
    console.log('REQUEST_ME', me);
    this.changeUs(me);
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

  private setUserData(data): void {
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
