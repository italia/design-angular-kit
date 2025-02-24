import { Component } from '@angular/core';
import { ItVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-default-example',
  templateUrl: './video-player-default-example.component.html',
})
export class VideoPlayerDefaultExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    muted: true,
    sources: [{ src: '//vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' }],
  } satisfies ItVideoPlayerOptions;
}
