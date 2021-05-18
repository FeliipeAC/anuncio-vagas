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
  // [
  //   {
  //     name: 'Front end Developer',
  //     mode: 'Remote',
  //     category: 'Front-end',
  //     type: 'Full-time',
  //     technologies: ['Angular', 'HTML/CSS', 'TypeScript'],
  //     posted: 1620575818000,
  //   },

  //   {
  //     name: 'Fulltstack Developer',
  //     mode: 'Remove/Presential',
  //     category: 'FullStack',
  //     type: 'Full-time',
  //     technologies: [
  //       'Angular',
  //       'HTML/CSS',
  //       'TypeScript',
  //       'PostgreSQL',
  //       'Ruby',
  //       'Node JS',
  //     ],
  //     posted: 1619884618000,
  //   },

  //   {
  //     name: 'Back-end Developer',
  //     mode: 'Remote',
  //     category: 'Back-end',
  //     type: 'Part-time',
  //     technologies: ['TypeScript', 'PostgreSQL', 'Node JS'],
  //     posted: 1619193418000,
  //   },
  // ];

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
