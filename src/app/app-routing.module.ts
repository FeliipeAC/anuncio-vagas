import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'new-job',
    loadChildren: () =>
      import('./pages/new-job/new-job.module').then((m) => m.NewJobModule),
  },
  {
    path: 'job-details',
    loadChildren: () =>
      import('./pages/job-details/job-details.module').then(
        (m) => m.JobDetailsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
