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
