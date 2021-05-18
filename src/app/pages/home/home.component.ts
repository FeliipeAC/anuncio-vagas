import { IdNameModel } from './../../shared/models/id-name-model';
import { FormControl, FormGroup } from '@angular/forms';
import { JobModel } from './../../shared/models/job-model';
import { JobService } from './../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listJobs: JobModel[] = [];

  filtredList$ = new Observable<JobModel[]>();

  listCompanies: IdNameModel[] = [];

  formFilter = new FormGroup({
    companies: new FormControl({
      id: 'all',
      name: 'All',
    }),
  });

  constructor(private router: Router, private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getListCompanies().then((res) => {
      this.listCompanies = res;
      this.listCompanies.unshift({
        id: 'all',
        name: 'All',
      });
    });

    this.filtredList$ = combineLatest([
      this.jobService.getListJobs(),
      this.formFilter.controls.companies.valueChanges.pipe(
        startWith({
          id: 'all',
          name: 'All',
        })
      ),
    ]).pipe(
      map(([jobs, filter]) => {
        let data = jobs;

        if (filter && filter.id !== 'all') {
          data = data.filter((job) => {
            const companies = job.companies.map((el) => el.name);
            return companies.includes(filter.name);
          });
        }

        return data;
      })
    );
  }

  navigateToNewJob(): void {
    this.router.navigateByUrl('/new-job');
  }
}
