import { MessageFunc, ValidateFunc } from '../interfaces/index';
import { base } from './base';
/**
 * Custom validation decorator
 *
 * @param validation User provided validation method
 * @param message User provided message function or string
 */
export function custom(validation: ValidateFunc, message: MessageFunc) {
  return base(validation, message);
}
