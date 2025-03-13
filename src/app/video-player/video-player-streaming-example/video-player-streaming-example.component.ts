import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-streaming-example',
  templateUrl: './video-player-streaming-example.component.html',
})
export class VideoPlayerStreamingExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    fluid: true,
    preload: 'auto',
    poster: '/assets/video/ElephantsDream.mp4-poster16.gif',
    sources: [{ src: '/assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd', type: 'application/dash+xml' }],
    captions: [
      {
        src: '/assets/video/subtitles-en.vtt',
        label: 'English',
        lang: 'en',
      },
      {
        src: '/assets/video/subtitles-es.vtt',
        label: 'Espanol',
        lang: 'es',
      },
      {
        src: '/assets/video/subtitles-it.vtt',
        label: 'Italiano',
        lang: 'it',
        default: true,
      },
    ],
    chapters: [
      {
        src: '/assets/video/chapters-en.vtt',
        label: 'English',
        lang: 'en',
      },
      {
        src: '/assets/video/chapters-es.vtt',
        label: 'Espanol',
        lang: 'es',
      },
      {
        src: '/assets/video/chapters-it.vtt',
        label: 'Italiano',
        lang: 'it',
        default: true,
      },
    ],
  } satisfies ItVideoPlayerOptions;
}
