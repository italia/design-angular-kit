import { AfterViewInit, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { CarouselType } from '../../../../interfaces/core';
import { BooleanInput, isTrueBooleanInput } from '../../../../utils/boolean-input';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

import { CarouselBI } from 'bootstrap-italia';

@Component({
  selector: 'it-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  exportAs: 'itCarousel'
})
export class CarouselComponent implements AfterViewInit {

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

  @ViewChild('carousel')
  private carouselDiv!: ElementRef<HTMLDivElement>;
  private carousel?: any;

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

  ngAfterViewInit(): void {
    this.carousel = CarouselBI.getOrCreateInstance(this.carouselDiv.nativeElement);
  }

  /**
   * Removes CarouselBI features
   */
  public dispose(): void {
    this.carousel?.dispose();
  }
}
