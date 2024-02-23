import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

export type ItDurationPipeType = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

/**
 * Transform a number into a duration.
 * Is necessary indicate the value expressed by the number, for example 'day'.
 * @example
 *  - 1, 'day' -> 1 day
 *  - 5, 'day' -> 5 days
 *  - 7, 'day' -> 1 week
 *  - 365, 'day' -> 1 year
 *  - 2, 'week' -> 2 weeks
 *  ...
 */
@Pipe({
  name: 'itDuration',
  standalone: true,
})
export class ItDurationPipe extends TranslatePipe implements PipeTransform {
  /**
   * Transform a number into a duration.
   * Is necessary indicate the value expressed by the number, for example 'day'.
   * @example
   *  - 1, 'day' -> 1 day
   *  - 5, 'day' -> 5 days
   *  - 7, 'day' -> 1 week
   *  - 8, 'day' -> 1 week
   *  - 365, 'day' -> 1 year
   *  - 2, 'week' -> 2 weeks
   *  - 24, 'month' -> 1 year
   *  ...
   * @param value the number
   * @param type the number expressed type
   */
  override transform(value: string | number | undefined, type: ItDurationPipeType): string {
    let valueAdjust = Number(value);
    if (isNaN(valueAdjust)) {
      return '';
    }

    switch (type) {
      // eslint-disable-next-line no-fallthrough
      case 'second':
        if (valueAdjust < 60) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 60);
      // eslint-disable-next-line no-fallthrough
      case 'minute':
        if (valueAdjust < 60) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 60);
      // eslint-disable-next-line no-fallthrough
      case 'hour':
        if (valueAdjust < 24) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 24);
      // eslint-disable-next-line no-fallthrough
      case 'day':
        if (valueAdjust < 7) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 7);
      // eslint-disable-next-line no-fallthrough
      case 'week':
        if (valueAdjust < 5) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 5);
      // eslint-disable-next-line no-fallthrough
      case 'month':
        if (valueAdjust < 24) {
          return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
            count: valueAdjust,
          });
        }
        valueAdjust = Math.round(valueAdjust / 24);
      // eslint-disable-next-line no-fallthrough
      case 'year':
        return super.transform(`it.duration.${type}${valueAdjust === 1 ? '' : 's'}`, {
          count: valueAdjust,
        });
      default:
        return '';
    }
  }
}
