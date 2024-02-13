import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { mergeMap, timer } from 'rxjs';
import { Observable, } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
   if(route.data && route.data['preload'])
   {
    console.log("Preload path is:"+ route.path + " "+"Delay:"+route.data['delay']);
     //NS if you load module in delay time then you can set delay timer like this
     if(route.data['delay'])
     {
      return timer(7000).pipe(mergeMap(() => load()) // Use mergeMap to chain observables
      );
     }
    return  load();
  } 
   else{
   return of(null);
   }
  }
}
