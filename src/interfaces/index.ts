export type MessageFunc = string | ((propertyKey: string | symbol) => string);
export type ValidateFunc = (value: any) => boolean;

export interface Store {
  fields: Array<string | symbol>;
  operations: Map<string | symbol, ValidateFunc[]>;
  messages: Map<ValidateFunc, MessageFunc>;
}

export interface Validation {
  /**
   * Determines validity of the object
   */
  isValid: boolean;
  /**
   * List of errors to display to the user
   */
  errors: string[];
}
