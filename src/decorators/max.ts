import { MessageFunc } from '../interfaces/index';
import { base } from './base';

/**
 * Maximum value validator
 *
 * @param max Maximum allowable number
 * @param message User provided message function or string
 */
export function max(max: number, message?: MessageFunc) {
  return base(
    value => value <= max,
    key => `'${key}' was not less than or equal to ${max}`,
    message
  );
}
