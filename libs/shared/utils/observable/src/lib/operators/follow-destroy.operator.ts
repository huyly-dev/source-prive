import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

/**
 * Function support listen to complete$ complete and stop emit data from current observable
 * Use this function with autoDestroy decorator to destroy observable
 * @param instance: any
 * @returns MonoTypeOperatorFunction
 */
export function followDestroy<TData>(instance: any): MonoTypeOperatorFunction<TData> {
  return source$ => source$.pipe(takeUntil(instance.complete$ as Subject<unknown>));
}
