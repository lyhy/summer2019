import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCircleRoutingModule } from './life-circle-routing.module';
import { LifeCircleComponent } from './life-circle.component';

@NgModule({
  declarations: [
    LifeCircleComponent,
  ],
  imports: [
    CommonModule,
    LifeCircleRoutingModule
  ]
})
export class LifeCircleModule { }
