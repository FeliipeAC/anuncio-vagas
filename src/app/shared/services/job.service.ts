import { JobModel } from './../models/job-model';
import { IdNameModel } from './../models/id-name-model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  addJob(job: any) {
    return this.http.post(`${environment.baseUrl}/jobs`, job).toPromise();
  }

  getJob(id: string) {
    return this.http
      .get(`${environment.baseUrl}/jobs/${id}`)
      .pipe(map((res) => res as JobModel));
  }

  getListJobs() {
    return this.http
      .get(`${environment.baseUrl}/jobs`)
      .pipe(map((res) => res as JobModel[]));
  }

  getListCategories() {
    return this.http
      .get(`${environment.baseUrl}/categories`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }

  getListModes() {
    return this.http
      .get(`${environment.baseUrl}/modes`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }

  getListTypes() {
    return this.http
      .get(`${environment.baseUrl}/types`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }

  getListTechnologies() {
    return this.http
      .get(`${environment.baseUrl}/technologies`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }

  getListCompanies() {
    return this.http
      .get(`${environment.baseUrl}/companies`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }

  getListSalaries() {
    return this.http
      .get(`${environment.baseUrl}/salaries`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }
  getListLevels() {
    return this.http
      .get(`${environment.baseUrl}/levels`)
      .pipe(map((data) => data as IdNameModel[]))
      .toPromise();
  }
}
