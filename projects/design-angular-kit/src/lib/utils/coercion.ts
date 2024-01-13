import { booleanAttribute } from '@angular/core';

/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 *  @usageNotes
 *  ```typescript
 *  @Input({ transform: booleanAttribute }) status?: boolean;
 *  ```
 * @param {'false' | 'true' | boolean} value Value to be transformed.
 *
 * @publicApi
 */
export function inputToBoolean(value: 'false' | 'true' | boolean | undefined): boolean {
  // Wrap `@angular/core` function to force value type, for ide hits
  return booleanAttribute(value);
}
