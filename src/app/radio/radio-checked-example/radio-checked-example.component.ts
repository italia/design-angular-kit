import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it-radio-checked-example',
  templateUrl: './radio-checked-example.component.html',
  styleUrls: ['./radio-checked-example.component.scss']
})
export class RadioCheckedExampleComponent {

  selectedNation: string = 'Italia';

  italiaChecked: boolean = true;

  changeCurrentlySelected($event) {
    this.selectedNation = $event.value;
  }

}
