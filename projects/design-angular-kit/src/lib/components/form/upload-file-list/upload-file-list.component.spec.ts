import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'

import { UploadFileListComponent } from './upload-file-list.component'

describe('UploadFileListComponent', () => {
  let component: UploadFileListComponent;
  let fixture: ComponentFixture<UploadFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileListComponent ], imports:[TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileListComponent);
    component = fixture.componentInstance;
   component.fileList = []
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
