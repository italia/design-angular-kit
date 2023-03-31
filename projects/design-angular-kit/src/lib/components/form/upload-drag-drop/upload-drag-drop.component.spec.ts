import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'

import { UploadDragDropComponent } from './upload-drag-drop.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('UploadDragDropComponent', () => {
  let component: UploadDragDropComponent;
  let fixture: ComponentFixture<UploadDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDragDropComponent ], imports:[FormsModule,ReactiveFormsModule, TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
