import { METADATA_KEY } from '../constants/metadataKey';
import { MessageFunc, Store, ValidateFunc } from '../interfaces/index';
import { setupValidationHarness } from '../validation/setup';

/**
 * Base validation decorator for all other decorators
 *
 * @param validate Validation method
 * @param defaultMessage Default message function or string
 * @param message User provided message function or string
 */
export function base(validate: ValidateFunc, defaultMessage: MessageFunc,
                     message: MessageFunc = defaultMessage ) {
  return (target: object, propertyKey: string | symbol) => {
    setupValidationHarness(target);

    const setup: Store = Reflect.getMetadata(METADATA_KEY, target);
    const validationMap = setup.operations;
    const messageMap = setup.messages;
    const fields = setup.fields;
    const validationFuncs = validationMap.get(propertyKey);

    fields.push(propertyKey);
    messageMap.set(validate, message);
    if (validationFuncs) {
      validationFuncs.push(validate);
    } else {
      validationMap.set(propertyKey, [validate]);
    }
  };
}
