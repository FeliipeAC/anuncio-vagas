import { JobService } from './../../shared/services/job.service';
import { MaterialDesignModule } from './../../shared/material-design/material-design.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  {
    path: ':id',
    component: JobDetailsComponent,
  },
];

@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialDesignModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [JobService],
})
export class JobDetailsModule {}
