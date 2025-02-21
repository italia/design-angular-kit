import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VideoPlayerDefaultExampleComponent } from './video-player-default-example/video-player-default-example.component';
import { VideoPlayerExamplesComponent } from './video-player-examples/video-player-examples.component';
import { VideoPlayerIndexComponent } from './video-player-index/video-player-index.component';
import { VideoPlayerRoutingModule } from './video-player-routing.module';

@NgModule({
  declarations: [VideoPlayerIndexComponent, VideoPlayerExamplesComponent, VideoPlayerDefaultExampleComponent],
  imports: [VideoPlayerRoutingModule, SharedModule],
})
export class VideoPlayerModule {}
