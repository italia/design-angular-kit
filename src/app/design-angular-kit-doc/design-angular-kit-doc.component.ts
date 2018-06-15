import { Component, OnInit } from '@angular/core';
import * as Documentation from '../../assets/documentation.json';

@Component({
  selector: 'it-design-angular-kit-doc',
  templateUrl: './design-angular-kit-doc.component.html',
  styleUrls: ['./design-angular-kit-doc.component.scss']
})
export class DesignAngularKitDocComponent implements OnInit {

  component: any;

  constructor() {
    this.component = (<any>Documentation).components.find(component => component.name === 'DesignAngularKitComponent');
  }

  ngOnInit() {

  }

}
