import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesHomeComponent } from './resources-home/resources-home.component';

@NgModule({
  imports: [
    CommonModule,
    ResourcesRoutingModule
  ],
  declarations: [ResourcesHomeComponent]
})
export class ResourcesModule { }
