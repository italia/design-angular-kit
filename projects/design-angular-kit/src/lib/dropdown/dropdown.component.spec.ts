import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { FormsModule } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DropdownItemComponent } from './dropdown-item.component';
import { DropdownDividerComponent } from './dropdown-divider.component';
import { DropdownHeaderComponent } from './dropdown-header.component';
import { THEME_COLORS } from '../models/ThemeColor';

@Component({
  template: `
  <div>
    <it-dropdown
      [color]="color"
      [label]="label"
      [dark]="isDark"
      [fullWidth]="isFullWidth">
      <it-dropdown-header>Header</it-dropdown-header>
      <it-dropdown-divider></it-dropdown-divider>
      <it-dropdown-item *ngFor="let item of items"
        [link]="item.link"
        [active]="item.active"
        [disabled]="item.disabled"
        [large]="item.large"
        [icon]="item.icon"
        [iconPosition]="item.iconPosition">
        {{item.text}}
      </it-dropdown-item>
    </it-dropdown>
  </div>`
})
class SingleDropdownComponent {
  isDark = false;
  color = undefined;
  label = 'Bottone per Dropdown';
  isFullWidth = false;

  items = [
    {
      link: 'https://www.google.com', active: false,
      disabled: false, large: true,
      icon: 'it-favorite', iconPosition: 'right',
      text: 'Item 1'
    },
    {
      link: 'https://www.google.com', active: false,
      disabled: true, large: false,
      icon: 'it-link', iconPosition: 'right',
      text: 'Item 2'
    },
    {
      link: 'https://www.google.com', active: false,
      disabled: false, large: true,
      icon: '', iconPosition: 'right',
      text: 'Item 3'
    },
  ];
}

describe('DropdownComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        DropdownComponent,
        DropdownItemComponent,
        DropdownDividerComponent,
        DropdownHeaderComponent,
        SingleDropdownComponent,
      ]
    });

    TestBed.compileComponents();
  }));

  describe('comportamenti base', () => {

    let fixture: ComponentFixture<SingleDropdownComponent>;
    let testComponent: SingleDropdownComponent;
    let dropdownDebugElement: DebugElement;
    let dropdownNativeElement: HTMLElement;
    let dropdownInstance: DropdownComponent;
    let dropdownItemDebugElements: DebugElement[];
    let dropdownItemInstances: DropdownItemComponent[];
    let dropdownButton: HTMLElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleDropdownComponent);
      fixture.detectChanges();

      dropdownDebugElement = fixture.debugElement.query(By.directive(DropdownComponent));
      dropdownNativeElement = dropdownDebugElement.nativeElement;
      dropdownInstance = dropdownDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;

      dropdownItemDebugElements = fixture.debugElement.queryAll(By.directive(DropdownItemComponent));
      dropdownItemInstances = dropdownItemDebugElements.map(debugEl => debugEl.componentInstance);

      dropdownButton = fixture.nativeElement.querySelector('button');
    });

    it('dovrebbe poter passare da sfondo scuro a quello chiaro', () => {
      expect(dropdownInstance.dark).toBeFalsy();
      testComponent.isDark = true;
      fixture.detectChanges();

      expect(dropdownInstance.dark).toBeTruthy();
    });

    it('dovrebbe poter passare da menu standard a quello full width', () => {
      expect(dropdownInstance.fullWidth).toBeFalsy();
      testComponent.isFullWidth = true;
      fixture.detectChanges();

      expect(dropdownInstance.fullWidth).toBeTruthy();
    });

    it('dovrebbe poter cambiare il testo del bottone per dropdown', () => {
      expect(dropdownInstance.label).toBe('Bottone per Dropdown');

      const NEW_TEXT = 'Nuovo testo del bottone per Dropdown';
      testComponent.label = NEW_TEXT;
      fixture.detectChanges();

      expect(dropdownInstance.label).toBe(NEW_TEXT);
    });

    it('dovrebbe poter cambiare i colori del bottone per dropdown', () => {
      expect(dropdownInstance.color).toBe('dropdown');

      testComponent.color = THEME_COLORS.DANGER;
      fixture.detectChanges();
      expect(dropdownInstance.color).toBe(THEME_COLORS.DANGER);

      testComponent.color = THEME_COLORS.PRIMARY;
      fixture.detectChanges();
      expect(dropdownInstance.color).toBe(THEME_COLORS.PRIMARY);

      testComponent.color = THEME_COLORS.INFO;
      fixture.detectChanges();
      expect(dropdownInstance.color).toBe(THEME_COLORS.INFO);
    });

    it('dovrebbe mostrare il menu dopo un click sul bottone per dropdown', () => {
      expect(dropdownInstance.isOpen).toBeFalsy();
      dropdownButton.click();
      fixture.detectChanges();

      expect(dropdownInstance.isOpen).toBeTruthy();
    });
  });

  describe('comportamenti dei DropdownItemComponent', () => {

    let fixture: ComponentFixture<SingleDropdownComponent>;
    let testComponent: SingleDropdownComponent;
    let dropdownDebugElement: DebugElement;
    let dropdownNativeElement: HTMLElement;
    let dropdownInstance: DropdownComponent;
    let dropdownItemDebugElements: DebugElement[];
    let dropdownItemInstances: DropdownItemComponent[];
    let dropdownItemAnchorElements: HTMLAnchorElement[];

    beforeEach(() => {
      fixture = TestBed.createComponent(SingleDropdownComponent);
      fixture.detectChanges();

      dropdownDebugElement = fixture.debugElement.query(By.directive(DropdownComponent));
      dropdownNativeElement = dropdownDebugElement.nativeElement;
      dropdownInstance = dropdownDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;

      dropdownItemDebugElements = fixture.debugElement.queryAll(By.directive(DropdownItemComponent));
      dropdownItemInstances = dropdownItemDebugElements.map(debugEl => debugEl.componentInstance);

      dropdownItemAnchorElements = dropdownItemDebugElements.map(
        debugEl => debugEl.query(By.css('a')).nativeElement
      );
    });

    it('dovrebbe poter cambiare il link di un item a runtime', () => {
      const firstItem = testComponent.items[0];
      const firstDropdownItemComponent = dropdownItemDebugElements[0].componentInstance;
      const firstDropdownItemAnchor = dropdownItemAnchorElements[0];
      expect(firstDropdownItemAnchor.href).toContain('https://www.google.com');

      const NEW_HREF = 'https://www.yahoo.com';
      firstItem.link = NEW_HREF;
      fixture.detectChanges();

      expect(firstDropdownItemComponent.link).toContain(NEW_HREF);
      expect(firstDropdownItemAnchor.href).toContain(NEW_HREF);
    });

    it('dovrebbe poter cambiare la forma e la posizione della icona di un item a runtime', () => {
      const secondItem = testComponent.items[1];
      const secondDropdownItemComponent = dropdownItemDebugElements[1].componentInstance;

      let secondDropdownItemIcon: HTMLElement = dropdownItemDebugElements[1].query(By.css('i')).nativeElement;
      const hasLinkIcon = secondDropdownItemIcon.classList.contains('it-link');
      const hasRightPosition = secondDropdownItemIcon.classList.contains('right');
      expect(hasLinkIcon).toBeTruthy();
      expect(hasRightPosition).toBeTruthy();

      const NEW_ICON = 'it-info';
      secondItem.icon = NEW_ICON;
      fixture.detectChanges();

      const hasNewIcon = secondDropdownItemIcon.classList.contains(NEW_ICON);
      expect(hasNewIcon).toBeTruthy();
      expect(secondDropdownItemComponent.icon).toContain(NEW_ICON);

      const NEW_POSITION = 'left';
      secondItem.iconPosition = NEW_POSITION;
      fixture.detectChanges();

      secondDropdownItemIcon = dropdownItemDebugElements[1].query(By.css('i')).nativeElement;
      const hasLeftPosition = secondDropdownItemIcon.classList.contains(NEW_POSITION);
      expect(hasLeftPosition).toBeTruthy();
      expect(secondDropdownItemComponent.iconPosition).toContain(NEW_POSITION);
    });

    it('dovrebbe poter cambiare marcare come elemento attivo un item a runtime', () => {
      const thirdItem = testComponent.items[2];
      const thirdDropdownItemComponent = dropdownItemDebugElements[2].componentInstance;
      const thirdDropdownItemAnchor = dropdownItemAnchorElements[2];

      let isActive = thirdDropdownItemAnchor.classList.contains('active');
      expect(thirdDropdownItemComponent.active).toBeFalsy();
      expect(isActive).toBeFalsy();

      thirdItem.active = true;
      fixture.detectChanges();

      isActive = thirdDropdownItemAnchor.classList.contains('active');
      expect(thirdDropdownItemComponent.active).toBeTruthy();
      expect(isActive).toBeTruthy();
    });
  });

});
