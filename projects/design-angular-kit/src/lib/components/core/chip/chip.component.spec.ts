import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { tb_base } from '../../../../test';
import { ItChipComponent } from './chip.component';

describe('ItChipComponent', () => {
  let component: ItChipComponent;
  let fixture: ComponentFixture<ItChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItChipComponent],
      providers: tb_base.providers,
    })
      .overrideComponent(ItChipComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ItChipComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on close button should trigger close.emit()', () => {
    spyOn(component.closeEvent, 'emit').and.returnValue();
    component.showCloseButton = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    expect(component.closeEvent.emit).toHaveBeenCalled();
  });

  it('click on close button DISABLED should NOT trigger close.emit()', () => {
    spyOn(component.closeEvent, 'emit').and.returnValue();
    component.showCloseButton = true;
    component.disabled = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    expect(component.closeEvent.emit).not.toHaveBeenCalled();
  });

  it('can set label', () => {
    component.label = 'label';
    fixture.detectChanges();
    // const spanElement = fixture.debugElement.query(By.css('.chip-label'));
    expect(component).toBeTruthy();
  });

  it('can set size', () => {
    component.size = 'lg';
    fixture.detectChanges();
    const divElement = fixture.debugElement.query(By.css('.chip-lg'));
    expect(divElement).toBeTruthy();
  });

  it('can set color', () => {
    component.color = 'primary';
    fixture.detectChanges();
    const divElement = fixture.debugElement.query(By.css('.chip-primary'));
    expect(divElement).toBeTruthy();
  });

  it('can set icon', () => {
    component.icon = 'github';
    fixture.detectChanges();
    const svgElement = fixture.debugElement.query(By.css('.icon.icon-xs'));
    expect(svgElement).toBeTruthy();
  });

  it('can set avantar and alt', () => {
    component.altAvatar = 'alt';
    component.avatar = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(
      By.css('img[alt="alt"][src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"]')
    );
    expect(imgElement).toBeTruthy();
  });
});
