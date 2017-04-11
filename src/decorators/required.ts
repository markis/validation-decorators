import { MessageFunc } from '../interfaces/index';
import { base } from './base';

/**
 * Check that a property has a value
 *
 * @param message Message to return to the consumer
 */
export function required(message?: MessageFunc) {
  return base(
    value => !!value,
    key => `'${key}' is required`,
    message
  );
}
