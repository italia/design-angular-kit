import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild
} from '@angular/core';
import { CarouselType } from '../../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselBI } from 'bootstrap-italia';
import { startWith, Subscription } from 'rxjs';

@Component({
  selector: 'it-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  exportAs: 'itCarousel',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  /**
   * The callout title
   */
  @Input() title?: string;

  /**
   * The carousel type
   * @default default
   */
  @Input() type: CarouselType = 'default';

  /**
   * Custom class in splide__track element
   */
  @Input() trackClass: string = '';

  /**
   * True for full screen (landscape) viewing
   */
  @Input() fullCarousel?: BooleanInput;

  /**
   * To indicate that the contained image is of a large type
   */
  @Input() bigImg?: BooleanInput;

  /**
   * Card line style
   */
  @Input() lined?: BooleanInput;

  @ContentChildren(CarouselItemComponent) items?: QueryList<CarouselItemComponent>;


  private carousel?: CarouselBI;

  @ViewChild('carousel') private carouselDiv!: ElementRef<HTMLDivElement>;

  private itemSubscriptions?: Array<Subscription>;

  get typeClass(): string {
    const typeClass = 'it-carousel-landscape-abstract';
    return this.type === 'default' ? typeClass : typeClass + `-${this.type}`;
  }

  get isFullCarousel(): boolean {
    return isTrueBooleanInput(this.fullCarousel);
  }

  get isBigImg(): boolean {
    return isTrueBooleanInput(this.bigImg);
  }

  get isLined(): boolean {
    return isTrueBooleanInput(this.lined);
  }

  constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.carousel = CarouselBI.getOrCreateInstance(this.carouselDiv.nativeElement);
    this.items?.changes.pipe( // When carousel items changes (dynamic add/remove)
      startWith(undefined)
    ).subscribe(() => {
      this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
      this.itemSubscriptions = this.items?.map(item => item.valueChanges.subscribe(() => {
        this._changeDetectorRef.detectChanges(); // DetectChanges when carousel item attributes changes
      }));
      this._changeDetectorRef.detectChanges(); // Force update html render
    });
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }

  /**
   * Removes CarouselBI features
   */
  public dispose(): void {
    this.carousel?.dispose();
  }
}
