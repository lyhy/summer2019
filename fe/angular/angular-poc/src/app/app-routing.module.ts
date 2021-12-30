import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'rxjs', loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule) }, { path: 'life-circle', loadChildren: () => import('./life-circle/life-circle.module').then(m => m.LifeCircleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
