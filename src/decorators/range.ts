import { base } from './base';
import { MessageFunc } from '../interfaces/MessageFunc';

/**
 * Range validator
 * 
 * @param min Minimum value for range
 * @param max Maximum value for range
 * @param message User provided message function or string 
 */
export function range(min: number, max: number, message?: MessageFunc) {
  return base(
    value => min <= value && max >= value,
    key => `'${key}' was not between ${min} and ${max}`,
    message
  );
}
