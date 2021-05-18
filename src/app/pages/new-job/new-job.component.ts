import { JobModel } from './../../shared/models/job-model';
import { JobService } from './../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss'],
})
export class NewJobComponent implements OnInit {
  formNewJob: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService
  ) {
    this.formNewJob = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      mode: new FormControl('', Validators.required),
      location: new FormControl(''),
      technologies: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(320),
      ]),
      salary: new FormControl('', Validators.required),
      companies: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  save(): void {
    const job: JobModel = this.formNewJob.value;
    job.created = moment().unix();

    this.jobService
      .addJob(job)
      .then((res) => {
        console.log('saved: ', res);
      })
      .catch((err) => {
        console.error('error: ', err);
      });
  }
}
