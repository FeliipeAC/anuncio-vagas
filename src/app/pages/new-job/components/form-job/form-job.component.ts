import { JobService } from './../../../../shared/services/job.service';
import { IdNameModel } from './../../../../shared/models/id-name-model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-job',
  templateUrl: './form-job.component.html',
  styleUrls: ['./form-job.component.scss'],
})
export class FormJobComponent implements OnInit {
  @Input() form!: FormGroup;
  listCategories: IdNameModel[] = [];
  listTypes: IdNameModel[] = [];
  listModes: IdNameModel[] = [];
  listTechnologies: IdNameModel[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    Promise.all([
      this.jobService.getListCategories(),
      this.jobService.getListModes(),
      this.jobService.getListTechnologies(),
      this.jobService.getListTypes(),
    ])
      .then(([categories, modes, technologies, types]) => {
        this.listCategories = categories;
        this.listTypes = types;
        this.listModes = modes;
        this.listTechnologies = technologies;
      })
      .catch((err) => {
        console.error('error retrieving lists: ', err);
      });
  }
}