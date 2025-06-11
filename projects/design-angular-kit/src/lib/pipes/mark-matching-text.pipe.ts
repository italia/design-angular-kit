import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Allows you to highlight text with the <mark> tag
 */
@Pipe({
  standalone: true,
  name: 'itMarkMatchingText',
})
export class ItMarkMatchingTextPipe implements PipeTransform {
  private readonly domSanitizer = inject(DomSanitizer);

  /**
   * Allows you to highlight text with the <mark> tag
   * @param allString the full text to search from
   * @param searchString the string to search
   */
  transform(allString: string | undefined, searchString: string | number | null | undefined): SafeHtml | string | undefined {
    if (!searchString) {
      return allString;
    } else if (!allString) {
      return '';
    }

    if (typeof searchString === 'number') {
      searchString = searchString.toString();
    }

    // Check if search string is a substring of pivot string (no case-sensitive)
    const idxOfMatchString = allString.toLowerCase().indexOf(searchString.toLowerCase());
    if (idxOfMatchString !== -1) {
      // retrieve the exactly substring
      const matchingString = allString.substring(idxOfMatchString, idxOfMatchString + searchString.length);
      // Replace original string marking as <strong> (bold) the matchinng substring
      const regEx = new RegExp('(' + matchingString + ')', 'gi');
      const res = allString.replace(regEx, '<mark>$1</mark>');
      return this.domSanitizer.bypassSecurityTrustHtml(res);
    }

    return allString;
  }
}
