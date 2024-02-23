import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CalloutRoutingModule } from './callout-routing.module';
import { CalloutIndexComponent } from './callout-index/callout-index.component';
import { CalloutExampleComponent } from './callout-example/callout-example.component';
import { CalloutExamplesComponent } from './callout-examples/callout-examples.component';
import { CalloutSuccessComponent } from './callout-success/callout-success.component';
import { CalloutWarningComponent } from './callout-warning/callout-warning.component';
import { CalloutNoteComponent } from './callout-note/callout-note.component';
import { CalloutDangerComponent } from './callout-danger/callout-danger.component';
import { CalloutImportantComponent } from './callout-important/callout-important.component';
import { CalloutApprofondimentoComponent } from './callout-approfondimento/callout-approfondimento.component';
import { CalloutHightlightsComponent } from './callout-hightlights/callout-hightlights.component';
import { HightlightsSuccessComponent } from './hightlights-success/hightlights-success.component';
import { HightlightsNoteComponent } from './hightlights-note/hightlights-note.component';
import { HightlightsImportantComponent } from './hightlights-important/hightlights-important.component';
import { HightlightsDangerComponent } from './hightlights-danger/hightlights-danger.component';
import { HightlightsWarningComponent } from './hightlights-warning/hightlights-warning.component';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, CalloutRoutingModule],
  declarations: [
    CalloutIndexComponent,
    CalloutExamplesComponent,
    CalloutExampleComponent,
    CalloutSuccessComponent,
    CalloutWarningComponent,
    CalloutNoteComponent,
    CalloutDangerComponent,
    CalloutImportantComponent,
    CalloutApprofondimentoComponent,
    CalloutHightlightsComponent,
    HightlightsSuccessComponent,
    HightlightsNoteComponent,
    HightlightsImportantComponent,
    HightlightsDangerComponent,
    HightlightsWarningComponent,
  ],
})
export class CalloutModule {}
