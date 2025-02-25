import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { configureTech, mergeConfig, Tech } from './video-player.config';
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

  async ngOnInit() {
    const config = mergeConfig(this.options);
    if ((this.options as any).source) {
      console.log('source', (this.options as any).source, config);
    }
    await configureTech(config as { tech: Tech });
    this.setVideoAttributes(config);

    this.player = videojs(this.target.nativeElement, config, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  private setVideoAttributes(options: ItVideoPlayerOptions) {
    const v = this.target.nativeElement as HTMLVideoElement;

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
