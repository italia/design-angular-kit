import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type DateAgoPipeInterval = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

/**
 * Indicates in a textual way how much time has passed since the indicated date
 * @example 2 hours ago
 */
@Pipe({
  name: 'itDateAgo',
  pure: false,
  standalone: true,
})
export class DateAgoPipe extends TranslatePipe implements PipeTransform {

  /**
   * Indicates in a textual way how much time has passed since the indicated date
   * @example 2 hours ago
   * @param value the Date or date string
   */
  override transform(value: string | Date): string {
    if (!value) {
      return '';
    }

    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (isNaN(seconds)) {
      return '';
    }

    // less than 30 seconds ago will show as 'Just now'
    if (seconds < 29) {
      return super.transform('it.date-ago-pipe.just-now');
    }

    const intervals = new Map<DateAgoPipeInterval, number>([
      ['year', 31536000],
      ['month', 2592000],
      ['week', 604800],
      ['day', 86400],
      ['hour', 3600],
      ['minute', 60],
      ['second', 1],
    ]);

    for (const interval of intervals) {
      const counter = Math.floor(seconds / interval[1]);
      if (counter > 0) {
        return super.transform(`it.date-ago-pipe.${counter === 1 ? 'singular-' : ''}${interval[0]}-ago`, {
          count: counter,
        });
      }
    }

    return '';
  }
}
