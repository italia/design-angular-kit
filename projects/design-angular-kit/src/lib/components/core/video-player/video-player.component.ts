import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { DEFAULT_CONFIG } from './video-player.config';
import { ItVideoPlayerOptions } from './video-player.model';

//https://italia.github.io/bootstrap-italia/docs/componenti/video-player/
//https://videojs.com/guides/angular/
//https://github.com/sankalpkataria/videojs-angular-demo/

@Component({
  standalone: true,
  selector: 'it-video-player',
  template: ` <video #target class="video-js vjs-theme-bootstrap-italia vjs-fluid vjs-big-play-centered"></video> `,
  encapsulation: ViewEncapsulation.None,
})
export class ItVideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef;

  @Input() options: ItVideoPlayerOptions;

  player: Player;

  ngOnInit() {
    this.setVideoOptions();

    const config = { ...DEFAULT_CONFIG, ...this.options };

    this.player = videojs(this.target.nativeElement, config, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  private setVideoOptions() {
    const v = this.target.nativeElement as HTMLVideoElement;

    const { controls, muted } = this.options;

    if (controls) {
      v.setAttribute('controls', '');
    }

    if (muted) {
      v.setAttribute('muted', '');
    }

    v.setAttribute('preload', 'none');
    v.setAttribute('playsinline', '');
  }
}
