import { JobModel } from './../../shared/models/job-model';
import { JobService } from './../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  job!: JobModel;
  constructor(
    private jobService: JobService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;

    this.jobService
      .getJob(id)
      .toPromise()
      .then((res) => {
        this.job = res;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
