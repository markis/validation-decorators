import { MessageFunc } from '../interfaces/index';
import { base } from './base';

const uuidRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;

/**
 * Validates a universally unique identifier
 *
 * @param message Message to return to the consumer
 */
export function uuid(message?: MessageFunc) {
  return base(
    value => typeof value === 'string' && uuidRegex.test(value),
    key =>  `'${key}' is not a valid uuid`,
    message
  );
}
