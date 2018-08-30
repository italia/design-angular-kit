export class Util {
  static coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  static coerceNumberProperty(value: any, fallbackValue = 0): number {
    return Util._isNumberValue(value) ? Number(value) : fallbackValue;
  }

  static _isNumberValue(value: any): boolean {
    return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));

  }
}
