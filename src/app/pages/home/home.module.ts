import { MaterialDesignModule } from './../../shared/material-design/material-design.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JobCardComponent } from './components/job-card/job-card.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, JobCardComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), MaterialDesignModule],
})
export class HomeModule {}
