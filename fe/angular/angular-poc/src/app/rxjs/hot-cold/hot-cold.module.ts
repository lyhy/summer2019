import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotColdRoutingModule } from './hot-cold-routing.module';
import { HotColdComponent } from './hot-cold.component';


@NgModule({
  declarations: [
    HotColdComponent
  ],
  imports: [
    CommonModule,
    HotColdRoutingModule
  ]
})
export class HotColdModule { }
