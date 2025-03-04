import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { ItAbstractComponent } from '../../../abstracts/abstract.component';
import { VideoPlayerI18nService } from './video-player-i18n.service';
import { Tech, VideoPlayerConfigService } from './video-player.config';
import { cookies } from './video-player.cookie';
import { ItVideoPlayerConfig, ItVideoPlayerOptions } from './video-player.model';

enum ViewType {
  Default = 'DEFAULT',
  Overlay = 'OVERLAY',
}

function transformOptions(o: ItVideoPlayerOptions) {
  return { ...o, aspectRatio: '16:9' } satisfies ItVideoPlayerOptions;
}

/**
 * Video Player
 * @description Component that allows playing a video.
 */
@Component({
  standalone: true,
  selector: 'it-video-player',
  template: `@switch (viewType$ | async) {
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
                  <input id="chk-remember" type="checkbox" #chkRemember />
                  <label for="chk-remember">Ricorda per tutti i video</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ng-container *ngTemplateOutlet="videoTemplate"></ng-container>
            <ng-container *ngTemplateOutlet="transcriptionTemplate"></ng-container>
          </div>
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
  imports: [AsyncPipe, NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
})
export class ItVideoPlayerComponent extends ItAbstractComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Options for video player configuration
   */
  @Input({ transform: transformOptions }) options!: ItVideoPlayerOptions;

  @ViewChild('videoPlayer', { static: false }) videoPlayerRef?: ElementRef<HTMLVideoElement>;

  @ViewChild('acceptOveraly', { static: false }) acceptOveralyRef?: ElementRef<HTMLDivElement>;

  @ViewChild('acceptOverlayable', { static: false }) acceptOverlayableRef?: ElementRef<HTMLDivElement>;

  @ViewChild('chkRemember', { static: false }) chrRememberRef?: ElementRef<HTMLInputElement>;

  player?: Player;

  readonly viewTypes = ViewType;

  readonly viewType$ = new BehaviorSubject<ViewType | undefined>(undefined);

  readonly #i18nService = inject(VideoPlayerI18nService);

  readonly #destroyRef = inject(DestroyRef);

  private get viewType() {
    return this.viewType$.value;
  }

  constructor(private config: VideoPlayerConfigService) {
    super();
  }

  async ngOnInit() {
    const config = this.config.mergeConfig(this.options);
    this.setViewType(config);
    await this.config.configureTech(config as { tech: Tech });
    this.setVideoAttributes(config);

    if (!this.videoPlayerRef) {
      return;
    }

    const onPlayerReadyCb = () => {
      if (!this.player) {
        return;
      }
      this.#i18nService.init(this.player, this.#destroyRef);
    };

    this.player = videojs(this.videoPlayerRef.nativeElement, config, onPlayerReadyCb.bind(this));
  }

  override ngAfterViewInit() {
    if (this.viewType === ViewType.Overlay && cookies.isChoiceRemembered('youtube.com')) {
      this.hideOverlay();
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  acceptCookieHandler() {
    this.rememberHandler();
    this.hideOverlay();
  }

  private setViewType(config: ItVideoPlayerConfig) {
    this.viewType$.next(config.tech === 'youtube' ? ViewType.Overlay : ViewType.Default);
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
    console.log(remember);
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
