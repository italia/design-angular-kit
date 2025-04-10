import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Injector,
  Input,
  NgZone,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { delay } from 'rxjs';
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';

import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { VideoPlayerI18nService } from './video-player-i18n.service';
import { Tech, VideoPlayerConfigService } from './video-player.config';
import { cookies } from './video-player.cookie';
import { ItVideoPlayerConfig, ItVideoPlayerOptions } from './video-player.model';

enum ViewType {
  Default = 'DEFAULT',
  Overlay = 'OVERLAY',
}

/**
 * Video Player
 * @description Component that allows playing a video.
 */
@Component({
  standalone: true,
  selector: 'it-video-player',
  template: `@switch (viewType()) {
      @case (viewTypes.Default) {
        <div class="row">
          <ng-container *ngTemplateOutlet="videoTemplate"></ng-container>
          <ng-container *ngTemplateOutlet="transcriptionTemplate"></ng-container>
        </div>
      }
      @case (viewTypes.Overlay) {
        <div #acceptOverlayable class="acceptoverlayable show">
          <div #acceptOveraly class="acceptoverlay acceptoverlay-primary fade show">
            <div class="acceptoverlay-inner">
              <div class="acceptoverlay-icon">
                <svg class="icon icon-xl"><use href="/bootstrap-italia/dist/svg/sprites.svg#it-video"></use></svg>
              </div>
              <p>
                Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella
                <a href="#" class="text-white">cookie policy</a>.
              </p>
              <div class="acceptoverlay-buttons bg-dark">
                <button type="button" class="btn btn-primary" (click)="acceptCookieHandler()">Accetta</button>
                <div class="form-check">
                  <input id="chk-remember{{ id }}" type="checkbox" #chkRemember />
                  <label for="chk-remember{{ id }}">Ricorda per tutti i video</label>
                </div>
              </div>
            </div>
          </div>
          @if (cookieAccepted()) {
            <div>
              <ng-container *ngTemplateOutlet="videoTemplate"></ng-container>
              <ng-container *ngTemplateOutlet="transcriptionTemplate"></ng-container>
            </div>
          }
        </div>
      }
      @default {
        <h1>No video provider</h1>
      }
    }
    <ng-template #videoTemplate>
      <div>
        <video #videoPlayer class="video-js vjs-theme-bootstrap-italia vjs-fluid vjs-big-play-centered"></video>
      </div>
    </ng-template>

    <ng-template #transcriptionTemplate>
      <div class="vjs-transcription accordion">
        <div class="accordion-item">
          <h2 class="accordion-header " id="transcription-{{ id }}-head">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              [attr.data-bs-target]="'#transcription-' + id"
              [attr.aria-controls]="'transcription-' + id"
              aria-expanded="true">
              <ng-content select="[transcriptionTitle]">Trascrizione</ng-content>
            </button>
          </h2>
          <div
            id="transcription-{{ id }}"
            class="accordion-collapse collapse"
            role="region"
            [attr.aria-labelledby]="'transcription-' + id + '-head'">
            <div class="accordion-body">
              <ng-content select="[transcriptionText]">-</ng-content>
            </div>
          </div>
        </div>
      </div>
    </ng-template> `,
  imports: [NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItVideoPlayerComponent extends ItAbstractComponent implements OnInit {
  /**
   * Options for video player configuration
   */
  @Input() options!: ItVideoPlayerOptions;

  @ViewChild('videoPlayer', { static: false }) videoPlayerRef?: ElementRef<HTMLVideoElement>;

  @ViewChild('acceptOveraly', { static: false }) acceptOveralyRef?: ElementRef<HTMLDivElement>;

  @ViewChild('acceptOverlayable', { static: false }) acceptOverlayableRef?: ElementRef<HTMLDivElement>;

  @ViewChild('chkRemember', { static: false }) chrRememberRef?: ElementRef<HTMLInputElement>;

  player: Player | null = null;

  readonly viewTypes = ViewType;

  readonly viewType = signal<ViewType | undefined>(undefined);

  readonly cookieAccepted = signal(false);

  protected readonly i18nService = inject(VideoPlayerI18nService);

  readonly #destroyRef = inject(DestroyRef);

  private ngZone = inject(NgZone);
  private injector = inject(Injector);

  constructor(private config: VideoPlayerConfigService) {
    super();

    afterNextRender(() => {
      if (this.viewType() === ViewType.Overlay && cookies.isChoiceRemembered('youtube.com')) {
        this.hideOverlay();
      }
    });

    this.#destroyRef.onDestroy(() => this.player?.dispose());
  }

  async ngOnInit() {
    const config = this.config.mergeConfig(this.options);
    this.setViewType(config);
    // Avoid running change detections while the script is being loaded.
    await this.ngZone.runOutsideAngular(() => this.config.configureTech(config as { tech: Tech }));

    if (!this.videoPlayerRef) {
      // Note: No need to pipe with `takeUntilDestroyed`; `toObservable` is
      // completed by Angular when the `DestroyRef` from the injector is destroyed.
      toObservable(this.cookieAccepted, { injector: this.injector })
        .pipe(delay(0))
        .subscribe(value => {
          if (value && !this.player) {
            this.initVideoPlayer();
          }
        });

      return;
    }

    this.initVideoPlayer();
  }

  acceptCookieHandler() {
    this.rememberHandler();
    this.hideOverlay();
    this.cookieAccepted.set(true);
  }

  private initVideoPlayer() {
    const config = this.config.mergeConfig(this.options);
    this.setVideoAttributes(config);
    this.setVideoPlayer();
  }

  private setVideoPlayer() {
    const config = this.config.mergeConfig(this.options);
    const onPlayerReadyCb = () => {
      if (!this.player) {
        return;
      }
      this.i18nService.init(this.player, this.#destroyRef);
    };

    const element = this.videoPlayerRef?.nativeElement;
    if (!element) {
      throw Error('videoPlayerRef is undefined');
    }

    this.player = this.ngZone.runOutsideAngular(() => videojs(element, config, onPlayerReadyCb));
  }

  private setViewType(config: ItVideoPlayerConfig) {
    this.viewType.set(config.tech === 'youtube' ? ViewType.Overlay : ViewType.Default);

    this.cookieAccepted.set(this.viewType() === ViewType.Overlay && cookies.isChoiceRemembered('youtube.com'));
  }

  private hideOverlay() {
    if (!this.acceptOverlayableRef) {
      return;
    }
    const classes = ['show'];
    this.acceptOverlayableRef.nativeElement.classList.remove(...classes);
    if (!this.acceptOveralyRef) {
      return;
    }
    this.acceptOveralyRef.nativeElement.classList.remove(...classes);
    this.acceptOveralyRef.nativeElement.setAttribute('aria-hidden', 'true');
  }

  private rememberHandler() {
    if (!this.chrRememberRef) {
      return;
    }
    const remember = this.chrRememberRef.nativeElement.checked;
    cookies.rememberChoice('youtube.com', remember);
  }

  private setVideoAttributes(options: ItVideoPlayerOptions) {
    if (!this.videoPlayerRef) {
      return;
    }
    const v = this.videoPlayerRef.nativeElement;

    const { autoplay, controls, loop, muted, poster, fluid } = options;

    if (autoplay) {
      v.setAttribute('autoplay', autoplay.toString());
    }

    if (controls) {
      v.setAttribute('controls', '');
    }

    if (loop) {
      v.setAttribute('loop', '');
    }

    if (muted) {
      v.setAttribute('muted', '');
    }

    if (poster) {
      v.setAttribute('poster', poster);
    }

    if (fluid) {
      v.setAttribute('fluid', '');
    }

    v.setAttribute('preload', 'none');
    v.setAttribute('playsinline', '');
  }
}
