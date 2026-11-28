import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'it-source-display',
  templateUrl: './source-display.component.html',
  styleUrls: ['./source-display.component.scss'],
  standalone: false,
})
export class SourceDisplayComponent implements OnInit {
  @Input() html: string = '';
  @Input() typescript: string = '';
  @Input() scss: string = '';

  ngOnInit() {
    if (this.html) {
      this.html = this.html.replaceAll('/{/{', '{{');
      this.html = this.html.replaceAll('/}/}', '}}');
    }

    if (this.typescript) {
      this.typescript = this.typescript.replaceAll('/{/{', '{{');
      this.typescript = this.typescript.replaceAll('/}/}', '}}');
    }

    if (this.scss) {
      this.scss = this.scss.replaceAll('/{/{', '{{');
      this.scss = this.scss.replaceAll('/}/}', '}}');
    }
  }
}
