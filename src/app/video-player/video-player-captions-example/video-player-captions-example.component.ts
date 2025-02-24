import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-captions-example',
  templateUrl: './video-player-captions-example.component.html',
})
export class VideoPlayerCaptionsExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    muted: false,
    sources: [{ src: '/assets/video/ElephantsDream.mp4', type: 'video/mp4' }],
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
        default: true,
      },
      {
        src: '/assets/video/subtitles-it.vtt',
        label: 'Italiano',
        lang: 'it',
      },
    ],
  } satisfies ItVideoPlayerOptions;
}
