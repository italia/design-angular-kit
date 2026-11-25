import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItListItemComponent } from './list-item.component';
import { tb_base } from '../../../../../test';

describe('ItListItemComponent', () => {
  let component: ItListItemComponent;
  let fixture: ComponentFixture<ItListItemComponent>;
  let warnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    await TestBed.configureTestingModule(tb_base).compileComponents();

    fixture = TestBed.createComponent(ItListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should warn about the deprecated it-list-item element selector', () => {
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('it-list-item');
  });

  it('should warn about the deprecated avatar input only when it is set', () => {
    warnSpy.mockClear();
    fixture.detectChanges();
    expect(component.avatar).toBeUndefined();
    expect(warnSpy).not.toHaveBeenCalled();

    component.avatar = new URL('https://example.com/avatar.png');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain("'avatar'");
  });
});
