import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  public getSkillPercents(): Promise<any> {
    const data = this.httpClient
      .get('@openjobs-api/auth/users/me/recommended_jobs/skill_percents')
      .toPromise();

    return data;
  }
}
