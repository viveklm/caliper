import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentHomeComponent } from './assignment-home/assignment-home.component';

@NgModule({
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ],
  declarations: [AssignmentHomeComponent]
})
export class AssignmentsModule { }
