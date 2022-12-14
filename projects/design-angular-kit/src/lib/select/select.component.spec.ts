import { ComponentFixture, TestBed, flush, fakeAsync, waitForAsync } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ItIconModule } from '../icon/icon.module';

/**
 * Componente per testare una input di tipo text.
 * */
@Component({
  template: `
  <div>
    <it-select [(ngModel)]="value"></it-select>
  </div>`
})
class BasicSelectComponent {
  value = '';
}

describe('SelectComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ItIconModule
      ],
      declarations: [
        BasicSelectComponent
      ]
    })
    .compileComponents();
  }));

});
