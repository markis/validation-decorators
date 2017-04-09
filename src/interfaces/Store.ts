import { MessageFunc } from './MessageFunc';
import { ValidateFunc } from './ValidateFunc';

export interface Store {
  fields: (string | symbol)[];
  operations: Map<string | symbol, ValidateFunc[]>;
  messages: Map<ValidateFunc, MessageFunc>;
}
