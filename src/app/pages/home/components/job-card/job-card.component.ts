import { JobModel } from './../../../../shared/models/job-model';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job!: JobModel;

  constructor() {}

  ngOnInit(): void {}

  getPostedDate(date: number): string {
    return moment(date).fromNow();
  }
}
