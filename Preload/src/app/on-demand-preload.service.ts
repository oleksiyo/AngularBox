import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class OnDemandPreloadService {
  subject = new Subject<string>();

  startPreload(routePath: string) {
    this.subject.next(routePath);
  }
}