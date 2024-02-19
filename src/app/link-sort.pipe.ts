import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linksort',
})
export class LinkSortPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any[]): unknown[] {
    return value.sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));
  }
}
