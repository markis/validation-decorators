import { MessageFunc } from '../interfaces/index';
import { base } from './base';

export  type BasicTypes = 'boolean' | 'number' | 'string' | 'object' |
                          'function' | 'symbol' | 'undefined' | string;

/**
 * Basic type check
 *
 * @param type Object type to check (should be the response from typeof)
 * @param message Message to return to the consumer
 */
export function type(type: BasicTypes, message?: MessageFunc) {
  return base(
    value => typeof value === type,
    key => `'${key}' is not of type ${type}`,
    message
  );
}
