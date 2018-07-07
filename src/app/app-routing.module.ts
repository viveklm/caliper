import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'classes',
    loadChildren: './classes/classes.module#ClassesModule'
  },
  {
    path: 'metrics',
    loadChildren: './metrics/metrics.module#MetricsModule'
  },
  {
    path: 'assignments',
    loadChildren: './assignments/assignments.module#AssignmentsModule'
  },
  {
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
