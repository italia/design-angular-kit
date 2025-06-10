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
  ViewChild,
} from '@angular/core';
import { CarouselType } from '../../../../interfaces/core';
import { ItCarouselItemComponent } from '../carousel-item/carousel-item.component';
import { Carousel } from 'bootstrap-italia';
import { startWith, Subscription } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { inputToBoolean } from '../../../../utils/coercion';

/**
 * Carousel
 * @description A presentation component for scrolling through elements, images or text slides.
 */
@Component({
  selector: 'it-carousel',
  templateUrl: './carousel.component.html',
  exportAs: 'itCarousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class ItCarouselComponent implements AfterViewInit, OnDestroy {
  /**
   * The callout title
   * @default undefined
   */
  @Input() title: string | undefined;

  /**
   * The carousel type
   * @default default
   */
  @Input() type: CarouselType = 'default';

  /**
   * Custom class in splide__track element
   * @default ''
   */
  @Input() trackClass: string = '';

  /**
   * True for full screen (landscape) viewing
   * @default false
   */
  @Input({ transform: inputToBoolean }) fullCarousel?: boolean;

  /**
   * To indicate that the contained image is of a large type
   * @default false
   */
  @Input({ transform: inputToBoolean }) bigImg?: boolean;

  /**
   * To indicate that the contained image is of a standard type
   * @default false
   */
  @Input({ transform: inputToBoolean }) standardImage?: boolean;

  /**
   * Card line style
   * @default false
   */
  @Input({ transform: inputToBoolean }) lined?: boolean;

  @ContentChildren(ItCarouselItemComponent) protected items?: QueryList<ItCarouselItemComponent>;

  private carousel?: Carousel;

  @ViewChild('carousel') private carouselDiv!: ElementRef<HTMLDivElement>;

  private itemSubscriptions?: Array<Subscription>;

  protected get typeClass(): string {
    const typeClass = 'it-carousel-landscape-abstract';
    return this.type === 'default' ? typeClass : typeClass + `-${this.type}`;
  }

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.items?.changes
      .pipe(
        // When carousel items changes (dynamic add/remove)
        startWith(undefined)
      )
      .subscribe(() => {
        this.itemSubscriptions?.forEach(sub => sub.unsubscribe()); // Remove old subscriptions
        this.itemSubscriptions = this.items?.map(item =>
          item.valueChanges.subscribe(() => {
            this._changeDetectorRef.detectChanges(); // DetectChanges when carousel item attributes changes
          })
        );
        this._changeDetectorRef.detectChanges(); // Force update html render
      });
    setTimeout(() => {
      this.carousel = Carousel.getOrCreateInstance(this.carouselDiv.nativeElement);
    }, 100);
  }

  ngOnDestroy(): void {
    this.itemSubscriptions?.forEach(item => item.unsubscribe());
  }

  /**
   * Removes Carousel features
   */
  public dispose(): void {
    this.carousel?.dispose();
  }
}
