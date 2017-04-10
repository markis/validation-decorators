import { base } from './base';
import { MessageFunc } from '../interfaces/index';

/**
 * Basic type check
 * 
 * @param type Object type to check (should be the response from typeof)
 * @param message Message to return to the consumer
 */
export function type(type: 'boolean'|'number'|'string'|'object'|'function'|'symbol'|'undefined'|string, message?: MessageFunc) {
  return base(
    value => typeof value === type,
    key => `'${key}' is not of type ${type}`,
    message
  );
}
