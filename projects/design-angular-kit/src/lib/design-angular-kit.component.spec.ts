import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignAngularKitComponent } from './design-angular-kit.component';

describe('DesignAngularKitComponent', () => {
  let component: DesignAngularKitComponent;
  let fixture: ComponentFixture<DesignAngularKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignAngularKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignAngularKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
