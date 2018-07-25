export class Util {
  static coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }
}
