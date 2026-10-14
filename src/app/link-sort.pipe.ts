import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linksort',
  standalone: false,
})
export class LinkSortPipe implements PipeTransform {
  transform(value: any[]): unknown[] {
    return value.sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));
  }
}
