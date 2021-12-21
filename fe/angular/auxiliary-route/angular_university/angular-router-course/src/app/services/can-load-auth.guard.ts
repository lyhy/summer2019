import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable()
export class CanLoadAuthAuard implements CanLoad{
  constructor(private auth: AuthStore, private router: Router) {

  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      tap( loggedIn => {
        if(!loggedIn) {this.router.navigateByUrl('/login')}
      })
      );
  }



}
