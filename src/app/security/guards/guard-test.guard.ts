import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from "@ngrx/store";
import { AppState } from 'src/app/libs/state/AppState';

@Injectable({
  providedIn: 'root'
})
export class GuardTestGuard implements CanActivate {
  
  constructor(private router: Router, private store: Store<AppState>){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select("loger", "isLoged");
  }
  
}
