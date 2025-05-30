import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'it-source-display',
  templateUrl: './source-display.component.html',
  styleUrls: ['./source-display.component.scss'],
  standalone: false,
})
export class SourceDisplayComponent implements OnInit {
  @Input() html: string;
  @Input() typescript: string;
  @Input() scss: string;

  ngOnInit() {
    if (this.html) {
      this.html = this.html.replace(/\/{\/{/g, '{{');
      this.html = this.html.replace(/\/}\/}/g, '}}');
    }

    if (this.typescript) {
      this.typescript = this.typescript.replace(/\/{\/{/g, '{{');
      this.typescript = this.typescript.replace(/\/}\/}/g, '}}');
    }

    if (this.scss) {
      this.scss = this.scss.replace(/\/{\/{/g, '{{');
      this.scss = this.scss.replace(/\/}\/}/g, '}}');
    }
  }
}
