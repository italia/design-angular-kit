import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-streaming-multi-example',
  templateUrl: './video-player-streaming-multi-example.component.html',
})
export class VideoPlayerStreamingMultiExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    fluid: true,
    preload: 'auto',
    poster: '/assets/video/ElephantsDream.mp4-poster21.jpg',
    sources: [{ src: '/assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8', type: 'application/x-mpegURL' }],
    // captions: [
    //   {
    //     src: '/assets/video/subtitles-en.vtt',
    //     label: 'English',
    //     lang: 'en',
    //   },
    //   {
    //     src: '/assets/video/subtitles-es.vtt',
    //     label: 'Espanol',
    //     lang: 'es',
    //   },
    //   {
    //     src: '/assets/video/subtitles-it.vtt',
    //     label: 'Italiano',
    //     lang: 'it',
    //     default: true,
    //   },
    // ],
    // chapters: [
    //   {
    //     src: '/assets/video/chapters-en.vtt',
    //     label: 'English',
    //     lang: 'en',
    //   },
    //   {
    //     src: '/assets/video/chapters-es.vtt',
    //     label: 'Espanol',
    //     lang: 'es',
    //   },
    //   {
    //     src: '/assets/video/chapters-it.vtt',
    //     label: 'Italiano',
    //     lang: 'it',
    //     default: true,
    //   },
    // ],
  } satisfies ItVideoPlayerOptions;
}
