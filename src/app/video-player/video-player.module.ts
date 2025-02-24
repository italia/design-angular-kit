import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VideoPlayerCaptionsExampleComponent } from './video-player-captions-example/video-player-captions-example.component';
import { VideoPlayerChaptersExampleComponent } from './video-player-chapters-example/video-player-chapters-example.component';
import { VideoPlayerDefaultExampleComponent } from './video-player-default-example/video-player-default-example.component';
import { VideoPlayerExamplesComponent } from './video-player-examples/video-player-examples.component';
import { VideoPlayerIndexComponent } from './video-player-index/video-player-index.component';
import { VideoPlayerPosterExampleComponent } from './video-player-poster-example/video-player-poster-example.component';
import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerStreamingExampleComponent } from './video-player-streaming-example/video-player-streaming-example.component';
import { VideoPlayerStreamingMultiExampleComponent } from './video-player-streaming-multi-example/video-player-streaming-multi-example.component';

const EXAMPLES = [
  VideoPlayerDefaultExampleComponent,
  VideoPlayerPosterExampleComponent,
  VideoPlayerCaptionsExampleComponent,
  VideoPlayerChaptersExampleComponent,
  VideoPlayerStreamingExampleComponent,
  VideoPlayerStreamingMultiExampleComponent,
];

@NgModule({
  declarations: [VideoPlayerIndexComponent, VideoPlayerExamplesComponent, ...EXAMPLES],
  imports: [VideoPlayerRoutingModule, SharedModule],
})
export class VideoPlayerModule {}
