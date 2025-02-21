import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { DEFAULT_CONFIG } from './video-player.config';
import { ItVideoPlayerOptions } from './video-player.model';

@Component({
  standalone: true,
  selector: 'it-video-player',
  template: `
    <video
      #target
      class="video-js vjs-theme-bootstrap-italia vjs-fluid vjs-big-play-centered"
      controls
      muted
      playsinline
      preload="none"></video>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ItVideoPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef;

  @Input() options: ItVideoPlayerOptions;

  player: Player;

  ngOnInit() {
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
}
