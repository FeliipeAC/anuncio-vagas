import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: any = null;

  constructor() {}

  ngOnInit(): void {}

  getPostedDate(date: number): string {
    return moment(date).fromNow();
  }
}
