import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { AbstractFormComponent } from '../../../abstracts/abstract-form-component';

@Component({
  selector: 'it-rating[id]',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent extends AbstractFormComponent<number> {

  /**
   * The rating value
   */
  @Input() value?: number;

  /**
   * Number of stars to show
   * @default 5
   */
  @Input() starCount: number = 5;

  protected stars: Array<number> = [];

  get name(): string {
    return this._ngControl?.name?.toString() || (this.id!);
  }

  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);

    if (changes['starCount'] || !this.stars.length) {
      this.stars = Array.from({ length: this.starCount }, (_, i) => i + 1).reverse();
    }
  }

  override ngOnInit() {
    super.ngOnInit();

    if (!this.control.value && !!this.value) {
      this.writeValue(this.value);
      this.onChange(this.value);
    }
  }
}
