import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanLoadAuthAuard } from './services/can-load-auth.guard';
import { CustomPreloadingStratogy } from './services/custom-preloading.strategy';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'courses',
    loadChildren: ()=> import('./courses/courses.module').then(m => m.CoursesModule),
    data: {
      preload: true
    }
    // canLoad: [CanLoadAuthAuard]

  },
  {
    path: 'helpdesk-chat',
    component: ChatComponent,
    outlet: 'chat'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      preloadingStrategy: CustomPreloadingStratogy,
      enableTracing: false,
      useHash: true,
      scrollPositionRestoration: 'enabled',//to top
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',//empty path component to make sure relative path is always ../
      malformedUriErrorHandler:
      (error: URIError, urlSerializer: UrlSerializer, url: string)=> urlSerializer.parse('/page-not-found')
    })
  ],
  exports: [RouterModule],
  providers: [
    CanLoadAuthAuard,
    CustomPreloadingStratogy
  ]
})
export class AppRoutingModule {


}
