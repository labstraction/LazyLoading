import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RouteDataService implements Resolve<string[]> {

  constructor() { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]>{
    return of(["qui", "quo", "qua"]);
  }
}

export interface RouteData{
  strings: string[]
}