import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAngularKitDocComponent } from './design-angular-kit-doc.component';

describe('DesignAngularKitDocComponent', () => {
  let component: DesignAngularKitDocComponent;
  let fixture: ComponentFixture<DesignAngularKitDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAngularKitDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAngularKitDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
