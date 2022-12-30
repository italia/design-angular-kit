export type BooleanInput = boolean | 'true' | 'false'

/**
 * Check if boolean input has true value and not is `undefined`
 * @param booleanInput the boolean input
 */
export function isTrueBooleanInput(booleanInput?: BooleanInput): boolean {
  return booleanInput !== undefined && (booleanInput === true || booleanInput === 'true');
}

/**
 * Check if boolean input has false value or is `undefined`
 * @param booleanInput the boolean input
 */
export function isFalseBooleanInput(booleanInput?: BooleanInput): boolean {
  return booleanInput === undefined || booleanInput === false || booleanInput === 'false'
}
