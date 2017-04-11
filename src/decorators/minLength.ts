import { MessageFunc } from '../interfaces/index';
import { base } from './base';

/**
 * Minimum length validator
 *
 * @param minLength Minimum allowable length
 * @param message User provided message function or string
 */
export function minLength(minLength: number, message?: MessageFunc) {
  return base(
    value => value && value.length >= minLength,
    key => `'${key}' requires at least ${minLength} characters`,
    message
  );
}
