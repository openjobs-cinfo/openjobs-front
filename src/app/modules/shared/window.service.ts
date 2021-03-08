import {
  map,
  debounceTime,
  pluck,
  distinctUntilChanged,
  throttleTime,
} from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
function getWindowSize() {
  return {
    width: window.innerWidth,
    // you can sense other parameters here
  };
}
@Injectable()
export class WindowService {
  public static isMobile: BehaviorSubject<boolean> = new BehaviorSubject(false);
  width$: Observable<number>;
  scrolled: EventEmitter<any> = new EventEmitter();
  constructor() {
    let AsyncScheduler: any;
    setTimeout(() => {
      const elSidenav = document.querySelector('mat-sidenav-content');
      if (elSidenav) {
        fromEvent(elSidenav, 'scroll')
          .pipe(throttleTime(400, AsyncScheduler, { trailing: true }))
          .subscribe((e) => {
            this.scrolled.emit(e);
          });
      }
    }, 1000);
    const windowSize$ = new BehaviorSubject(getWindowSize());

    this.width$ = (windowSize$.pipe(pluck('width')) as Observable<number>).pipe(
      distinctUntilChanged()
    );

    fromEvent(window, 'resize')
      .pipe(debounceTime(100), map(getWindowSize))
      .subscribe(windowSize$);
  }
}
