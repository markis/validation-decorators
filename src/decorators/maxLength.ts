import { MessageFunc } from '../interfaces/index';
import { base } from './base';

/**
 * Maximum length validator
 *
 * @param maxLength Maximum Length allowable for an array or string
 * @param message User provided message function or string
 */
export function maxLength(maxLength: number, message?: MessageFunc) {
  return base(
    value => value && value.length >= maxLength,
    key => `'${key}' requires at least ${maxLength} characters`,
    message
  );
}
