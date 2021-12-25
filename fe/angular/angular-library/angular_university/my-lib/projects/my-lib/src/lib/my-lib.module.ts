import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { AuMaskComponent } from './au-mask/au-mask.component';
import { InputRefDirective } from './common/input-ref.directive';



@NgModule({
  declarations: [
    MyLibComponent,
    AuFaInputComponent,
    AuMaskComponent,
    InputRefDirective
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    AuFaInputComponent,
    InputRefDirective
  ]
})
export class MyLibModule { }
