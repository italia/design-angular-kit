import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownLinkExampleComponent } from './dropdown-link-example.component';

describe('DropdownLinkExampleComponent', () => {
  let component: DropdownLinkExampleComponent;
  let fixture: ComponentFixture<DropdownLinkExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownLinkExampleComponent]
    });
    fixture = TestBed.createComponent(DropdownLinkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
