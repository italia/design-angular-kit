import { Component } from '@angular/core';
import Documentation from '../../../assets/documentation.json';

@Component({
  selector: 'it-video-player-index',
  template: `
    <h1 class="bd-title">Video Player</h1>
    <p class="bd-lead">Componente che consente la riproduzione di video</p>
    <div [innerHTML]="component.description"></div>

    <it-tab-container>
      <it-tab-item label="Esempi" active="true" class="pt-3">
        <h1>TBD</h1>
      </it-tab-item>
      <it-tab-item label="API" class="pt-3">
        <h3>ItVideoPlayerComponent</h3>
        <it-api-parameters [component]="component"></it-api-parameters>
      </it-tab-item>
    </it-tab-container>
  `,
})
export class VideoPlayerIndexComponent {
  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'ItVideoPlayerComponent');
  }
}
