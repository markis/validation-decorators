import { base } from './base';
import { MessageFunc } from '../interfaces/MessageFunc';

/**
 * 
 * @param args 
 * @param message User provided message function or string 
 */
export function oneOf(values: (number | string)[], message?: MessageFunc) {
  return base(
    value => values.indexOf(value) !== -1,
    key => `'${key}' was not one of '${values.join("', '")}'`,
    message  
  );
}
