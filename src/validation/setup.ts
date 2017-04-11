import { METADATA_KEY } from '../constants/metadataKey';

export function setupValidationHarness(target: object): void {
  if (Reflect.getMetadata(METADATA_KEY, target)) {
    return;
  }

  const validation = {
    fields: [],
    messages: new Map(),
    operations: new Map()
  };
  Reflect.defineMetadata(METADATA_KEY, validation, target);
}
