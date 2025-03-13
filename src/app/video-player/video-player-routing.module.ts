import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerIndexComponent } from './video-player-index/video-player-index.component';

const routes = [
  {
    path: '',
    component: VideoPlayerIndexComponent,
  },
] satisfies Routes;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPlayerRoutingModule {}
