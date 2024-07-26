import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAttributeToken } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransferStore } from '../store/transfer.store';
import { ItTransferListComponent } from './transfer-list.component';

describe('ItTransferListComponent', <T>() => {
  let component: ItTransferListComponent<T>;
  let fixture: ComponentFixture<ItTransferListComponent<T>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTransferListComponent],
      providers: [
        TransferStore,
        TranslateService,
        { provide: new HostAttributeToken('title'), useValue: 'title' },
        { provide: new HostAttributeToken('sourceType'), useValue: 'source' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ItTransferListComponent<T>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
