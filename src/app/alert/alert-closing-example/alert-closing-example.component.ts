import { Component } from '@angular/core';

@Component({
  selector: 'it-alert-closing-example',
  templateUrl: './alert-closing-example.component.html',
})
export class AlertClosingExampleComponent {
  closeTime?: string;
  closedTime?: string;

  onClose(): void {
    this.closeTime = new Date().toISOString();
  }

  onClosed(): void {
    this.closedTime = new Date().toISOString();
  }
}
