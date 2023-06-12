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
import { ItCarouselItemComponent } from '../carousel-item/carousel-item.component';
import { CarouselBI } from 'bootstrap-italia';
import { startWith, Subscription } from 'rxjs';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * Carousel
 * @description A presentation component for scrolling through elements, images or text slides.
 */
@Component({
  standalone: true,
  selector: 'it-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  exportAs: 'itCarousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgTemplateOutlet, NgIf]
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
   * @default undefined
   */
  @Input() fullCarousel: BooleanInput | undefined;

  /**
   * To indicate that the contained image is of a large type
   * @default undefined
   */
  @Input() bigImg: BooleanInput | undefined;

  /**
   * To indicate that the contained image is of a standard type
   * @default undefined
   */
  @Input() standardImage: BooleanInput | undefined;

  /**
   * Card line style
   * @default undefined
   */
  @Input() lined: BooleanInput | undefined;

  @ContentChildren(ItCarouselItemComponent) protected items?: QueryList<ItCarouselItemComponent>;

  private carousel?: CarouselBI;

  @ViewChild('carousel') private carouselDiv!: ElementRef<HTMLDivElement>;

  private itemSubscriptions?: Array<Subscription>;

  protected get typeClass(): string {
    const typeClass = 'it-carousel-landscape-abstract';
    return this.type === 'default' ? typeClass : typeClass + `-${this.type}`;
  }

  protected get isFullCarousel(): boolean {
    return isTrueBooleanInput(this.fullCarousel);
  }

  protected get isBigImg(): boolean {
    return isTrueBooleanInput(this.bigImg);
  }

  protected get isStandardImage(): boolean {
    return isTrueBooleanInput(this.standardImage);
  }

  protected get isLined(): boolean {
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
