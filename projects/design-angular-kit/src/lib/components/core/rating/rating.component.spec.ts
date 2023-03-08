import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { TranslateModule } from '@ngx-translate/core';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
