import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppersContainerComponent } from './steppers-container.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SteppersContainerComponent', () => {
  let component: SteppersContainerComponent;
  let fixture: ComponentFixture<SteppersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteppersContainerComponent],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SteppersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
