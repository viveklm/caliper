import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesHomeComponent } from './classes-home/classes-home.component';

@NgModule({
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  declarations: [ClassesHomeComponent]
})
export class ClassesModule { }
