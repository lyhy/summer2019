import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCircleComponent } from './life-circle.component';

const routes: Routes = [{ path: '', component: LifeCircleComponent }, { path: 'life-circle-all', loadChildren: () => import('./life-circle-all/life-circle-all.module').then(m => m.LifeCircleAllModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCircleRoutingModule { }
