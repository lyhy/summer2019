import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotColdComponent } from './hot-cold.component';

const routes: Routes = [{ path: '', component: HotColdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotColdRoutingModule { }
