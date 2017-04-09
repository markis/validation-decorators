import { base } from './base';
import { MessageFunc } from '../interfaces/MessageFunc';
import { ValidateFunc } from '../interfaces/ValidateFunc';

/**
 * Custom validation decorator
 * 
 * @param validation User provided validation method
 * @param message User provided message function or string
 */
export function custom(validation: ValidateFunc, message: MessageFunc) {
  return base(validation, message);
}
