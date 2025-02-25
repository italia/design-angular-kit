import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { configureTech, mergeConfig, Tech } from './video-player.config';
import { cookies } from './video-player.cookie';
import { ItVideoPlayerConfig, ItVideoPlayerOptions } from './video-player.model';

//https://italia.github.io/bootstrap-italia/docs/componenti/video-player/
//https://videojs.com/guides/angular/
//https://github.com/sankalpkataria/videojs-angular-demo/

enum ViewType {
  Default = 'DEFAULT',
  Overlay = 'OVERLAY',
}

@Component({
  standalone: true,
  selector: 'it-video-player',
  template: `@switch (viewType$ | async) {
    @case (viewTypes.Default) {
      <div class="row">
        <video #videoPlayer class="video-js vjs-theme-bootstrap-italia vjs-fluid vjs-big-play-centered"></video>
        <div class="vjs-transcription accordion">
          <div class="accordion-item">
            <h2 class="accordion-header " id="transcription-head1">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#transcription1"
                aria-expanded="true"
                aria-controls="transcription">
                Trascrizione
              </button>
            </h2>
            <div id="transcription1" class="accordion-collapse collapse" role="region" aria-labelledby="transcription-head1">
              <div class="accordion-body">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer
                eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    @case (viewTypes.Overlay) {
      <div #acceptOverlayable class="acceptoverlayable">
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
          <video #videoPlayer class="video-js vjs-theme-bootstrap-italia vjs-fluid vjs-big-play-centered"></video>
        </div>
      </div>
    }
    @default {
      <h1>No video provider</h1>
    }
  }`,
  imports: [AsyncPipe],
  encapsulation: ViewEncapsulation.None,
})
export class ItVideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() options: ItVideoPlayerOptions;

  @ViewChild('videoPlayer', { static: false }) videoPlayerRef: ElementRef<HTMLVideoElement>;
  @ViewChild('acceptOveraly', { static: false }) acceptOveralyRef: ElementRef<HTMLDivElement>;
  @ViewChild('acceptOverlayable', { static: false }) acceptOverlayableRef: ElementRef<HTMLDivElement>;
  @ViewChild('chkRemember', { static: false }) chrRememberRef: ElementRef<HTMLInputElement>;

  player: Player;

  readonly viewTypes = ViewType;

  readonly viewType$ = new BehaviorSubject<ViewType>(undefined);
  private get viewType() {
    return this.viewType$.value;
  }

  async ngOnInit() {
    const config = mergeConfig(this.options);
    this.setViewType(config);
    await configureTech(config as { tech: Tech });
    this.setVideoAttributes(config);

    this.player = videojs(this.videoPlayerRef.nativeElement, config, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngAfterViewInit() {
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
    const classes = ['show'];
    this.acceptOverlayableRef.nativeElement.classList.remove(...classes);

    this.acceptOveralyRef.nativeElement.classList.remove(...classes);
    this.acceptOveralyRef.nativeElement.setAttribute('aria-hidden', 'true');
  }

  private rememberHandler() {
    const remember = this.chrRememberRef.nativeElement.checked;
    console.log(remember);
    cookies.rememberChoice('youtube.com', remember);
  }

  private setVideoAttributes(options: ItVideoPlayerOptions) {
    const v = this.videoPlayerRef.nativeElement;

    const { controls, muted, poster, fluid } = options;

    if (controls) {
      v.setAttribute('controls', '');
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
