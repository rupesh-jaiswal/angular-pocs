/*
* Mock async observables that return asynchronously.
* The observable either emits once and completes or errors.
*
* Must call `tick()` when test with `fakeAsync()`.
*/
import { defer } from 'rxjs';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
