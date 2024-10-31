import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TransferStore } from './store/transfer.store';
import { ItTransferComponent } from './transfer.component';

describe('ItTransferComponent', () => {
  let component: ItTransferComponent;
  let fixture: ComponentFixture<ItTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ItTransferComponent,
        //https://stackoverflow.com/a/52461467/2642723
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [TransferStore, TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
