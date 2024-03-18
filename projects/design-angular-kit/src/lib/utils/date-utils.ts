import { Observable, shareReplay, takeWhile, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export class ItDateUtils {
  /**
   * Add seconds to date
   * @param date the date
   * @param seconds seconds to add
   */
  public static addSeconds(date: Date, seconds: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setSeconds(date.getSeconds() + seconds);
    return newDate;
  }

  /**
   * Add minutes to date
   * @param date the date
   * @param minutes minutes to add
   */
  public static addMinutes(date: Date, minutes: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setMinutes(date.getMinutes() + minutes);
    return newDate;
  }

  /**
   * Add hours to date
   * @param date the date
   * @param hours hours to add
   */
  public static addHours(date: Date, hours: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setHours(date.getHours() + hours);
    return newDate;
  }

  /**
   * Add days to date
   * @param date the date
   * @param days days to add
   */
  public static addDays(date: Date, days: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  /**
   * Add years to date
   * @param date the date
   * @param months months to add
   */
  public static addMonths(date: Date, months: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setMonth(date.getMonth() + months);
    return newDate;
  }

  /**
   * Add years to date
   * @param date the date
   * @param years years to add
   */
  public static addYears(date: Date, years: number): Date {
    const newDate = new Date(date.valueOf());
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
  }

  /**
   * Calculate number of days between two date
   * @param startDate
   * @param endDate
   * @param absolute return unsigned result
   */
  public static countDays(startDate: Date, endDate: Date, absolute: boolean = false): number {
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const diff = absolute ? Math.abs(differenceInTime) : differenceInTime;
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  /**
   * Check if string is a date with iso format
   * @param value the string
   */
  public static isIsoString(value: string | null): boolean {
    if (!value || !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)) {
      return false;
    }
    const d = new Date(value);
    return !!d && !isNaN(d.getTime()) && d.toISOString() === value;
  }

  /**
   * Convert iso string to Date
   * @param isoString the iso string
   */
  public static isoStringToDate(isoString: string | null): Date | null {
    return isoString ? new Date(Date.parse(isoString)) : null;
  }

  /**
   * Remove time from an iso date string
   * @param isoString the iso string
   */
  public static isoStringRemoveTime(isoString: string): string {
    let date = ItDateUtils.isoStringToDate(isoString);
    if (!date) {
      return isoString;
    }
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().substring(0, isoString.indexOf('T'));
  }

  /**
   * Set iso string hours to 0 and format correctly the date (consider timezone offset)
   * @example '2024-03-04T23:00:00.000Z' -> '2024-03-05T00:00:00.000Z'
   * @param isoString the iso string
   */
  public static isoStringSetZeroTime(isoString: string): string {
    let date = ItDateUtils.isoStringToDate(isoString);
    if (!date) {
      return isoString;
    }
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    date.setUTCHours(0, 0, 0, 0);
    return date.toISOString();
  }

  /**
   * Calculate the date time left and return the string format [d h m s]
   * @param endDate
   */
  public static timeLeftString(endDate: Date): Observable<string> {
    const endTime = endDate.getTime();
    return timer(0, 1000).pipe(
      map(() => Math.floor((endTime - new Date().getTime()) / 1000)),
      takeWhile(delta => delta >= 0),
      map(delta => {
        const arrayResult: Array<string> = [];
        const days = Math.floor(delta / 60 / 60 / 24);
        if (days > 0) {
          arrayResult.push(days + 'd');
        }
        delta -= days * 60 * 60 * 24;
        const hours = Math.floor(delta / 60 / 60) % 24;
        if (hours > 0) {
          arrayResult.push(hours + 'h');
        }

        delta -= hours * 60 * 60;
        const minutes = Math.floor(delta / 60) % 60;
        arrayResult.push(minutes + 'm');

        delta -= minutes * 60;
        const seconds = delta % 60;
        arrayResult.push(seconds + 's');

        return arrayResult.join(' ');
      }),
      shareReplay(1)
    );
  }

  /**
   * Calculate the next day of week
   * @param dayOfWeek Day of week 0=Sunday, 1=Monday...4=Thursday...
   * @param hour the specif hour
   * @param minute the specific minute
   */
  public static nextWeekDayAndTime(dayOfWeek: number, hour = 0, minute = 0): Date {
    const now = new Date();
    const result = new Date(now.getFullYear(), now.getMonth(), now.getDate() + ((7 + dayOfWeek - now.getDay()) % 7), hour, minute, 0, 0);

    if (result < now) {
      result.setDate(result.getDate() + 7);
    }

    return result;
  }
}
