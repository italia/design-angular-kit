import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'

import { UploadDragDropComponent } from './upload-drag-drop.component'

describe('UploadDragDropComponent', () => {
  let component: UploadDragDropComponent;
  let fixture: ComponentFixture<UploadDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDragDropComponent ], imports:[TranslateModule.forRoot()]
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
