import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public async authenticate(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email !== 'wja1@ifal.edu.br' && password !== '123456') {
          return reject({
            message: 'Unauthorized',
          });
        }
        return resolve({
          name: 'Wellici',
          email: 'wja1@ifal.edu.br',
          token: 'fkajfsjfs.safhsdhjshagagsa.dasfosncsdn',
        });
      }, 1500);
    });
  }
}
