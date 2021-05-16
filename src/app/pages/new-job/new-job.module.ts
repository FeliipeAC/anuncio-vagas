import { JobService } from './../../shared/services/job.service';
import { MaterialDesignModule } from './../../shared/material-design/material-design.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewJobComponent } from './new-job.component';
import { FormJobComponent } from './components/form-job/form-job.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  {
    path: '',
    component: NewJobComponent,
  },
];

@NgModule({
  declarations: [NewJobComponent, FormJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialDesignModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [JobService],
})
export class NewJobModule {}
