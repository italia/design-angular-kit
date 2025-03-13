import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-poster-example',
  templateUrl: './video-player-poster-example.component.html',
})
export class VideoPlayerPosterExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    muted: true,
    sources: [{ src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }],
    poster: 'https://raw.githubusercontent.com/italia/bootstrap-italia/refs/heads/main/docs/assets/video/video_cover_seagulls.png',
  } satisfies ItVideoPlayerOptions;
}
