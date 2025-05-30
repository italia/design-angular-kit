import { Component } from '@angular/core';
import { ItEmbedVideoPlayerOptions } from 'projects/design-angular-kit/src/public_api';

@Component({
  selector: 'it-video-player-embed-example',
  templateUrl: './video-player-embed-example.component.html',
})
export class VideoPlayerEmbedExampleComponent {
  readonly options = {
    autoplay: false,
    controls: true,
    muted: true,
    source: { src: 'https://youtu.be/_0j7ZQ67KtY', type: 'video/youtube' },
  } satisfies ItEmbedVideoPlayerOptions;
}
