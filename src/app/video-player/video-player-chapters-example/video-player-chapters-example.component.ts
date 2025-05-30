import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-chapters-example',
  templateUrl: './video-player-chapters-example.component.html',
  standalone: false,
})
export class VideoPlayerChaptersExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    muted: false,
    sources: [{ src: '/assets/video/ElephantsDream.mp4', type: 'video/mp4' }],
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
