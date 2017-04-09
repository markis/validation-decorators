import { METADATA_KEY } from '../constants/metadataKey';

export function setupValidationHarness(target: Object): void {
  if (Reflect.getMetadata(METADATA_KEY, target)) {
    return;
  }
  
  const validation = {
    fields: [],
    operations: new Map(),
    messages: new Map()
  };
  Reflect.defineMetadata(METADATA_KEY, validation, target);
}
