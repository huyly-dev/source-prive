import { Subject } from 'rxjs';

/**
 * Function support add complete$ subject to class and complete it when destroy
 * Use this function with followDestroy operator to destroy observable
 * @returns ClassDecorator
 */
export function autoDestroy(): ClassDecorator {
  return (constructor) => {
    const originNgOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.complete$ = new Subject<unknown>();
    constructor.prototype.ngOnDestroy = function (...args: Record<string, unknown>[]) {
      this.complete$.next();
      this.complete$.complete();

      if (originNgOnDestroy) {
        originNgOnDestroy.apply(this, args);
      }
    };
  };
}
