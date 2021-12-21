import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CanLoadAuthAuard } from '../services/can-load-auth.guard';
import { ConfirmExistGuard } from '../services/confirm-exit.guard';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolver } from './services/course.resolver';
import { LessonResolver } from './services/lesson.resolver';
import { LessonsResolver } from './services/lessons.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':courseUrl',
    component: CourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [ConfirmExistGuard],
    children: [
      {
        path: '',
        component: LessonsListComponent,
        resolve: {
          lessons: LessonsResolver
        }
      },
      {
        path: 'lessons/:lessonSeqNo',
        component: LessonDetailComponent,
        resolve: {
          lesson: LessonResolver
        }
      }
    ],
    resolve: {
      course: CourseResolver
    }

  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonsResolver,
    LessonResolver,
    AuthGuard,
    ConfirmExistGuard
  ]
})
export class CoursesRoutingModule {



}
