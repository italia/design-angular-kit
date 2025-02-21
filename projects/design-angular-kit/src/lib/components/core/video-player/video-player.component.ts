import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'it-video-player',
  template: `<h1>Video Player</h1>`,
})
export class ItVideoPlayerComponent {
  constructor() {
    console.log(this.constructor.name);
  }
}
