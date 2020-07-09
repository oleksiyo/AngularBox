import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OnDemandPreloadService } from './on-demand-preload.service';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OnDemandPreloadStrategy implements PreloadingStrategy {
  private preloadOnDemand$: Observable<string>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.subject;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap(preloadPath => {
        const shouldPreload = route.path === preloadPath;
        return shouldPreload ? load() : of(null);
      }),
    );
  }
}