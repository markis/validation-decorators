import { base } from './base';
import { MessageFunc } from '../interfaces/index';

/**
 * Validate property against a Regular Expression
 * 
 * @param regex Regular expression to check against
 * @param message Message to return to the consumer
 */
export function regex(regex: RegExp, message?: MessageFunc) {
  return base(
    value => typeof value === 'string' && regex.test(value),
    key =>  `'${key}' did not match ${regex}`,
    message
  );
}
