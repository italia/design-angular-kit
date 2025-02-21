import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VideoPlayerIndexComponent } from './video-player-index/video-player-index.component';
import { VideoPlayerRoutingModule } from './video-player-routing.module';

@NgModule({
  declarations: [VideoPlayerIndexComponent],
  imports: [VideoPlayerRoutingModule, SharedModule],
})
export class VideoPlayerModule {}
