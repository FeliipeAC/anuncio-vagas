import { JobService } from './../../shared/services/job.service';
import { MaterialDesignModule } from './../../shared/material-design/material-design.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, JobCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialDesignModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [JobService],
})
export class HomeModule {}
