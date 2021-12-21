import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonResolver implements Resolve<LessonDetail> {
  constructor(private course: CoursesService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> {
    const lessonSeqNo = route.paramMap.get('lessonSeqNo');
    // const courseUrl = route.parent.paramMap.get('courseUrl');
    //paramsInheritanceStrategy: 'always'
    const courseUrl = route.paramMap.get('courseUrl');
    return this.course.loadLessonDetail(courseUrl, lessonSeqNo);
  }

}
