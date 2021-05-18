import { JobModel } from './../../shared/models/job-model';
import { JobService } from './../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listJobs: JobModel[] = [];

  constructor(private router: Router, private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getListJobs().subscribe((list) => {
      this.listJobs = list;
    });
  }

  navigateToNewJob(): void {
    this.router.navigateByUrl('/new-job');
  }
}
