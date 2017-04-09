import { base } from './base';
import { MessageFunc } from '../interfaces/MessageFunc';

/**
 * Minimum value validator
 * 
 * @param min Minimum allowable value
 * @param message User provided message function or string 
 */
export function min(min: number, message?: MessageFunc) {
  return base(
    value => value >= min,
    key => `'${key}' was not larger than or equal to ${min}`,
    message
  );
}
