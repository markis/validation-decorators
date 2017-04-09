import { METADATA_KEY } from '../constants/metadataKey';
import { MessageFunc, Store, Validation } from '../interfaces';

/**
 * Validate all the decorators
 * 
 * @param target Object to validate
 */
export function validate(target: Object): Validation {
  const setup: Store = Reflect.getMetadata(METADATA_KEY, target);
  const validationMap = setup.operations;
  const messageMap = setup.messages;
  const keys = uniq(setup.fields);

  const errors = keys
    .map(key => {
      const value = Reflect.get(target, key);
      return (validationMap.get(key) || [])
        .filter(isValid => !isValid(value))
        .map(func => messageMap.get(func))
        .map(handleMessage(key));
    })
    .reduce((pv, cv) => pv.concat(cv), [])

  return {
    isValid: errors.length === 0,
    errors
  };
}

function uniq(arr: (string | symbol)[]) {
  var seen = new Set<string | symbol>();
  return arr.filter(item => seen.has(item) ? false : !!seen.add(item));
}

function handleMessage(key: string| symbol) {
  return (message?: MessageFunc | string) => 
    typeof message === 'string' ?
      message :
      typeof message === 'function' ?
        message(key) :
        `${key} is not valid`;
}
