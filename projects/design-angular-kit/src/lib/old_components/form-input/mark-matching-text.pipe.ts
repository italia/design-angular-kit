import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
    name: 'markMatchingText'
}) 
export class MarkMatchingTextPipe implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) {}

    transform(allString: string, searchString: string): any {
        if (!searchString) { 
            return allString; 
        } else if(!allString) {
            return "";
        }
        // Check if search string is a substring of pivot string (no case-sensitive)
        const idxOfMatchString = allString.toLowerCase().indexOf(searchString.toLowerCase());
        if(idxOfMatchString !== -1) {
            // retrieve the exactly substring
            const matchingString = allString.substring(idxOfMatchString, idxOfMatchString + searchString.length);
            // Replace original string marking as <strong> (bold) the matchinng substring
            const regEx = new RegExp('(' + matchingString + ')', 'gi')
            const res = allString.replace(regEx, '<mark>$1</mark>');
            return this.domSanitizer.bypassSecurityTrustHtml(res);
        } 

        return allString;
        
    }

    
}