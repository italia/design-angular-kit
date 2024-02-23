import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ItAbstractFormComponent } from '../../../abstracts/abstract-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ItIconComponent } from '../../utils/icon/icon.component';

@Component({
  standalone: true,
  selector: 'it-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ReactiveFormsModule, ItIconComponent],
})
export class ItRatingComponent extends ItAbstractFormComponent<number | null | undefined> implements OnInit, OnChanges {
  /**
   * The rating value
   */
  @Input() value: number | undefined;

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
      this.onChange();
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
