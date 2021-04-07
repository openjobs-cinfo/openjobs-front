import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/shared/models/Job';
import { Skill } from 'src/app/shared/models/Skill';

interface ResponseJobsPagination<G> {
  count: number;
  next: string;
  previous: any;
  results: G[];
}

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  public getJobs(
    page: number,
    size: number
  ): Promise<ResponseJobsPagination<Job>> {
    return this.httpClient
      .get<ResponseJobsPagination<Job>>(
        `@openjobs-api/auth/users/me/recommended_jobs?page=${page}&page_size=${size}`
      )
      .toPromise();
  }

  public async getSkills(): Promise<any[]> {
    const { results } = await this.httpClient
      .get<ResponseJobsPagination<Skill>>(
        '@openjobs-api/skills?page=1&page_size=1000'
      )
      .toPromise();
    return results.map((item) => ({
      [item.id]: item,
    }));
  }
}
