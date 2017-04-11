import { MessageFunc } from '../interfaces/index';
import { base } from './base';

/**
 * Enum-like validator
 *
 * @param values List of values to check against
 * @param message User provided message function or string
 */
export function oneOf(values: Array<number | string>, message?: MessageFunc) {
  return base(
    value => values.indexOf(value) !== -1,
    key => `'${key}' was not one of '${values.join("', '")}'`,
    message
  );
}
