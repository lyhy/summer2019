import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCircleAllRoutingModule } from './life-circle-all-routing.module';
import { LifeCircleAllComponent } from './life-circle-all.component';
import { LifeCircleAllChildComponent } from './life-circle-all-child/life-circle-all-child.component';


@NgModule({
  declarations: [
    LifeCircleAllComponent,
    LifeCircleAllChildComponent
  ],
  imports: [
    CommonModule,
    LifeCircleAllRoutingModule
  ]
})
export class LifeCircleAllModule { }
