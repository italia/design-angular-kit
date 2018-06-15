import { Component, Input, Output, OnInit } from '@angular/core';

/**
 * The awesome design-angular kit component
 *
 * Can filter types of todos :
 *
 * | Type | API |
 * | --- | --- |
 * | completed | displayCompleted |
 * | all | displayAll |
 * | remaining | displayRemaining |
 */
@Component({
  selector: 'it-design-angular-kit',
  template: `
    <p>
      design-angular-kit works!
    </p>
  `,
  styles: []
})
export class DesignAngularKitComponent implements OnInit {

  @Input() public emptyInput: string;

  /**
   * @ignore
   */
  @Output() ignoredOutput: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @example
   *
   * length('yo')
   * 
   *
   * @param {string} target  The target to calculate the length
   * @returns The target string length
   */
  public length(target:string) : number {
    return target.length;
  };

}
