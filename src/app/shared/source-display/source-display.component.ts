import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'it-source-display',
  templateUrl: './source-display.component.html',
  styleUrls: ['./source-display.component.scss']
})
export class SourceDisplayComponent implements OnInit {
  @Input() html: string;
  @Input() typescript: string;
  @Input() css: string;

  constructor() { }

  ngOnInit() {
  }

}
