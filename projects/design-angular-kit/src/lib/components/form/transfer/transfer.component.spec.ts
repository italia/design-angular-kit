import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { tb_base } from 'projects/design-angular-kit/src/test';
import { TransferStore } from './store/transfer.store';
import { ItTransferComponent } from './transfer.component';

describe('ItTransferComponent', () => {
  let component: ItTransferComponent;
  let fixture: ComponentFixture<ItTransferComponent>;

  beforeEach(async () => {
    const { imports, providers } = tb_base;

    await TestBed.configureTestingModule({
      imports: [
        ...imports,
        ItTransferComponent,
        //https://stackoverflow.com/a/52461467/2642723
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [...providers, TransferStore, TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
