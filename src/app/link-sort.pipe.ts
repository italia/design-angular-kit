import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linksort'
})
export class LinkSortPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.sort((a, b) => (a.link > b.link) ? 1 : ((b.link > a.link) ? -1 : 0));
  }
}
