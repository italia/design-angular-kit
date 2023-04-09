import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form.component';

@Component({
  selector: 'it-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent extends AbstractFormComponent<number> implements OnInit, OnChanges {

  /**
   * The rating value
   */
  @Input() value?: number;

  /**
   * Number of stars to show
   * @default 5
   */
  @Input() starCount: number = 5;

  protected stars: Array<number> = this.generateStars();

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);

    if (changes['starCount'] || !this.stars.length) {
      this.stars = this.generateStars();
    }
  }

  override ngOnInit() {
    super.ngOnInit();

    if (!this.control.value && !!this.value) {
      this.writeValue(this.value);
      this.onChange(this.value);
    }
  }

  /**
   * Generate the array of stars
   * @private
   */
  private generateStars(): Array<number> {
    return Array.from({ length: this.starCount }, (_, i) => i + 1).reverse();
  }
}
