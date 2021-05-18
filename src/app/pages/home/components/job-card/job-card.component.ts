import { JobModel } from './../../../../shared/models/job-model';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job!: JobModel;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getPostedDate(date: number): string {
    return moment(date).fromNow();
  }

  navigateReadMore(id: number): void {
    this.router.navigate(['/job-details', id]);
  }
}
