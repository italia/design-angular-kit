import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VideoPlayerDefaultExampleComponent } from './video-player-default-example/video-player-default-example.component';
import { VideoPlayerExamplesComponent } from './video-player-examples/video-player-examples.component';
import { VideoPlayerIndexComponent } from './video-player-index/video-player-index.component';
import { VideoPlayerPosterExampleComponent } from './video-player-poster-example/video-player-poster-example.component';
import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerTrackExampleComponent } from './video-player-track-example/video-player-track-example.component';

@NgModule({
  declarations: [
    VideoPlayerIndexComponent,
    VideoPlayerExamplesComponent,
    VideoPlayerDefaultExampleComponent,
    VideoPlayerPosterExampleComponent,
    VideoPlayerTrackExampleComponent,
  ],
  imports: [VideoPlayerRoutingModule, SharedModule],
})
export class VideoPlayerModule {}
