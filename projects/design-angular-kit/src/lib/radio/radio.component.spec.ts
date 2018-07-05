import { Component, DebugElement, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, flush, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

import { RadioGroupDirective, RadioButtonComponent, RadioChange } from './radio.component';

@Component({
  template: `
  <it-radio-group [disabled]="isGroupDisabled"
                  [value]="groupValue"
                  name="test-name">
    <it-radio-button value="fire" label="Charmander" [disabled]="isFirstDisabled"></it-radio-button>
    <it-radio-button value="water" label="Squirtle"></it-radio-button>
    <it-radio-button value="leaf" label="Bulbasaur"></it-radio-button>
  </it-radio-group>
  `
})
class RadiosInsideRadioGroup {
  isFirstDisabled: boolean = false;
  isGroupDisabled: boolean = false;
  groupValue: string | null = null;
}

@Component({
  template: `
    <it-radio-button name="season" value="spring" label="Spring"></it-radio-button>
    <it-radio-button name="season" value="summer" label="Summer"></it-radio-button>
    <it-radio-button name="season" value="autum" label="Autumn"></it-radio-button>
    <it-radio-button name="weather" value="warm" label="Spring"></it-radio-button>
    <it-radio-button name="weather" value="hot" label="Summer"></it-radio-button>
    <it-radio-button name="weather" value="cool" label="Autumn"></it-radio-button>
    <it-radio-button id="nameless" value="no-name">No name</it-radio-button>
  `
})
class StandaloneRadioButtons { }

@Component({
  template: `
  <it-radio-group [(ngModel)]="modelValue" (change)="lastEvent = $event">
    <it-radio-button *ngFor="let option of options" [value]="option.value" [label]="option.label"></it-radio-button>
  </it-radio-group>
  `
})
class RadioGroupWithNgModel {
  modelValue: string;
  options = [
    {label: 'Vanilla', value: 'vanilla'},
    {label: 'Chocolate', value: 'chocolate'},
    {label: 'Strawberry', value: 'strawberry'},
  ];
  lastEvent: RadioChange;
}

@Component({
  template: `<it-radio-button>One</it-radio-button>`
})
class DisableableRadioButton {
  @ViewChild(RadioButtonComponent) itRadioButton;

  set disabled(value: boolean) {
    this.itRadioButton.disabled = value;
  }
}

describe('RadioComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        DisableableRadioButton,
        RadiosInsideRadioGroup,
        RadioGroupWithNgModel,
        StandaloneRadioButtons,
        RadioButtonComponent,
        RadioGroupDirective
      ]
    });

    TestBed.compileComponents();
  }));

  describe('all\'interno di un gruppo', () => {
    let fixture: ComponentFixture<RadiosInsideRadioGroup>;
    let groupDebugElement: DebugElement;
    let radioDebugElements: DebugElement[];
    let radioLabelElements: HTMLLabelElement[];
    let radioInputElements: HTMLInputElement[];
    let groupInstance: RadioGroupDirective;
    let radioInstances: RadioButtonComponent[];
    let testComponent: RadiosInsideRadioGroup;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(RadiosInsideRadioGroup);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(RadioGroupDirective));
      groupInstance = groupDebugElement.injector.get<RadioGroupDirective>(RadioGroupDirective);

      radioDebugElements = fixture.debugElement.queryAll(By.directive(RadioButtonComponent));
      radioInstances = radioDebugElements.map(debugEl => debugEl.componentInstance);

      radioLabelElements = radioDebugElements
        .map(debugEl => debugEl.query(By.css('label')).nativeElement);
      radioInputElements = radioDebugElements
        .map(debugEl => debugEl.query(By.css('input')).nativeElement);
    }));

    it('dovrebbe settare i name dei radio button uguali al name del gruppo', () => {
      expect(groupInstance.name).toBeTruthy();
      for (const radio of radioInstances) {
        expect(radio.name).toBe(groupInstance.name);
      }
    });

    it('dovrebbe disabilitare l\'intero radio group', () => {
      (groupInstance as any).disabled = '';
      fixture.detectChanges();

      radioLabelElements[0].click();
      fixture.detectChanges();

      expect(radioInstances[0].checked).toBe(false);
      expect(groupInstance.disabled).toBe(true);
    });

    it('dovrebbe disabilitare il click quando il gruppo è disabilitato', () => {
      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      radioLabelElements[0].click();
      fixture.detectChanges();

      expect(radioInstances[0].checked).toBe(false);
    });

    it('dovrebbe disabilitare ogni radio button quando l\'intero gruppo è disabilitato', () => {
      testComponent.isGroupDisabled = true;
      fixture.detectChanges();

      for (const radio of radioInstances) {
        expect(radio.disabled).toBe(true);
      }
    });

    it('dovrebbe aggiornare il valore del gruppo quando viene selezionato un nuovo radio button', () => {
      expect(groupInstance.value).toBeFalsy();

      radioInstances[0].checked = true;
      fixture.detectChanges();

      expect(groupInstance.value).toBe('fire');
      expect(groupInstance.selected).toBe(radioInstances[0]);
    });

    it('dovrebbe aggiornare il gruppo e i radio button quando uno dei radio button viene cliccato', () => {
      expect(groupInstance.value).toBeFalsy();

      radioLabelElements[0].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('fire');
      expect(groupInstance.selected).toBe(radioInstances[0]);
      expect(radioInstances[0].checked).toBe(true);
      expect(radioInstances[1].checked).toBe(false);

      radioLabelElements[1].click();
      fixture.detectChanges();

      expect(groupInstance.value).toBe('water');
      expect(groupInstance.selected).toBe(radioInstances[1]);
      expect(radioInstances[0].checked).toBe(false);
      expect(radioInstances[1].checked).toBe(true);
    });

    it('dovrebbe selezionare una radio button dopo l\'interazione con il radio button nativo', () => {
      radioInputElements[0].click();
      fixture.detectChanges();

      expect(radioInstances[0].checked).toBe(true);
      expect(groupInstance.value).toBe('fire');
      expect(groupInstance.selected).toBe(radioInstances[0]);
    });

    it('dovrebbe lanciare un evento change al click su un radio button', () => {
      expect(radioInstances[0].checked).toBe(false);

      const spies = radioInstances
        .map((radio, index) => jasmine.createSpy(`onChangeSpy ${index} for ${radio.name}`));

      spies.forEach((spy, index) => radioInstances[index].change.subscribe(spy));

      radioLabelElements[0].click();
      fixture.detectChanges();

      expect(spies[0]).toHaveBeenCalled();

      radioLabelElements[1].click();
      fixture.detectChanges();

      // L'evento change non deve essere lanciato quando il radio button viene deselezionato
      expect(spies[0]).toHaveBeenCalledTimes(1);
      expect(spies[1]).toHaveBeenCalledTimes(1);
    });

    it(`non dovrebbe emettere l'evento change sul gruppo quando il valore del gruppo viene cambiato programmaticamente`, () => {
      expect(groupInstance.value).toBeFalsy();

      const changeSpy = jasmine.createSpy('radio-group change listener');
      groupInstance.change.subscribe(changeSpy);

      radioLabelElements[0].click();
      fixture.detectChanges();

      expect(changeSpy).toHaveBeenCalledTimes(1);

      groupInstance.value = 'water';
      fixture.detectChanges();

      expect(changeSpy).toHaveBeenCalledTimes(1);
    });

    it('dovrebbe aggiornare il gruppo e i radio button quando viene aggiornato il valore del gruppo', () => {
      expect(groupInstance.value).toBeFalsy();

      testComponent.groupValue = 'fire';
      fixture.detectChanges();

      expect(groupInstance.value).toBe('fire');
      expect(groupInstance.selected).toBe(radioInstances[0]);
      expect(radioInstances[0].checked).toBe(true);
      expect(radioInstances[1].checked).toBe(false);

      testComponent.groupValue = 'water';
      fixture.detectChanges();

      expect(groupInstance.value).toBe('water');
      expect(groupInstance.selected).toBe(radioInstances[1]);
      expect(radioInstances[0].checked).toBe(false);
      expect(radioInstances[1].checked).toBe(true);
    });

    it('dovrebbe deselezionare tutti i radio quando il valore del gruppo viene messo a null', () => {
      radioInstances[0].checked = true;

      expect(groupInstance.value).toBeTruthy();

      groupInstance.value = null;

      expect(radioInstances.every(radio => !radio.checked)).toBe(true);
    });

    it(`dovrebbe aggiornare il radio button selezionato nel gruppo a null quando questo viene deselezionato programmaticamente`, () => {
      const changeSpy = jasmine.createSpy('radio-group change listener');
      groupInstance.change.subscribe(changeSpy);
      radioInstances[0].checked = true;

      fixture.detectChanges();

      expect(changeSpy).not.toHaveBeenCalled();
      expect(groupInstance.value).toBeTruthy();

      radioInstances[0].checked = false;

      fixture.detectChanges();

      expect(changeSpy).not.toHaveBeenCalled();
      expect(groupInstance.value).toBeFalsy();
      expect(radioInstances.every(radio => !radio.checked)).toBe(true);
      expect(groupInstance.selected).toBeNull();
    });

    it('non dovrebbe lanciare un evento change dal gruppo quando lo stato checked di un radio button cambia', () => {
      const changeSpy = jasmine.createSpy('radio-group change listener');
      groupInstance.change.subscribe(changeSpy);
      radioInstances[0].checked = true;

      fixture.detectChanges();

      expect(changeSpy).not.toHaveBeenCalled();
      expect(groupInstance.value).toBeTruthy();
      expect(groupInstance.value).toBe('fire');

      radioInstances[1].checked = true;

      fixture.detectChanges();

      expect(groupInstance.value).toBe('water');
      expect(changeSpy).not.toHaveBeenCalled();
    });

    it(`dovrebbe aggiornare lo stato checked di un radio button se cambia il valore del gruppo`, () => {
      const changeSpy = jasmine.createSpy('radio-group change listener');
      groupInstance.change.subscribe(changeSpy);
      groupInstance.value = 'apple';

      expect(changeSpy).not.toHaveBeenCalled();
      expect(groupInstance.value).toBe('apple');
      expect(groupInstance.selected).toBeFalsy('il radio selezionato dovrebbe essere null');
      expect(radioInstances[0].checked).toBeFalsy('non dovrebbe selezionare il primo radio');
      expect(radioInstances[1].checked).toBeFalsy('non dovrebbe selezionare il secondo radio');
      expect(radioInstances[2].checked).toBeFalsy('non dovrebbe selezionare il terzo radio');

      radioInstances[0].value = 'apple';

      fixture.detectChanges();

      expect(groupInstance.selected).toBe(
        radioInstances[0], 'il radio selezionato del gruppo dovrebbe essere il primo');
      expect(radioInstances[0].checked).toBeTruthy('il gruppo dovrebbe selezionare il primo radio button');
      expect(radioInstances[1].checked).toBeFalsy('non dovrebbe selezionare il secondo radio');
      expect(radioInstances[2].checked).toBeFalsy('non dovrebbe selezionare il terzo radio');
    });

  });

  describe('gruppo con ngModel', () => {
    let fixture: ComponentFixture<RadioGroupWithNgModel>;
    let groupDebugElement: DebugElement;
    let radioDebugElements: DebugElement[];
    let innerRadios: DebugElement[];
    let radioLabelElements: HTMLLabelElement[];
    let groupInstance: RadioGroupDirective;
    let radioInstances: RadioButtonComponent[];
    let testComponent: RadioGroupWithNgModel;
    let groupNgModel: NgModel;

    beforeEach(() => {
      fixture = TestBed.createComponent(RadioGroupWithNgModel);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      groupDebugElement = fixture.debugElement.query(By.directive(RadioGroupDirective));
      groupInstance = groupDebugElement.injector.get<RadioGroupDirective>(RadioGroupDirective);
      groupNgModel = groupDebugElement.injector.get<NgModel>(NgModel);

      radioDebugElements = fixture.debugElement.queryAll(By.directive(RadioButtonComponent));
      radioInstances = radioDebugElements.map(debugEl => debugEl.componentInstance);
      innerRadios = fixture.debugElement.queryAll(By.css('input[type="radio"]'));

      radioLabelElements = radioDebugElements
        .map(debugEl => debugEl.query(By.css('label')).nativeElement);
    });

    it('dovrebbe settare i songoli name dei radio button uguali al name del gruppo', () => {
      expect(groupInstance.name).toBeTruthy();
      for (const radio of radioInstances) {
        expect(radio.name).toBe(groupInstance.name);
      }

      groupInstance.name = 'new name';

      for (const radio of radioInstances) {
        expect(radio.name).toBe(groupInstance.name);
      }
    });

    it('dovrebbe selezionare il radio button corrispondente al cambio del valore del gruppo', () => {
      expect(groupInstance.value).toBeFalsy();
      for (const radio of radioInstances) {
        expect(radio.checked).toBeFalsy();
      }

      groupInstance.value = 'vanilla';
      for (const radio of radioInstances) {
        expect(radio.checked).toBe(groupInstance.value === radio.value);
      }
      expect(groupInstance.selected!.value).toBe(groupInstance.value);
    });

    it('Dovrebbe avere il corretto stato della form all\'inizio e dopo l\'interazione', () => {
      // Il controllo dovrebbe essere inizializzato a valid, pristine, and untouched.
      expect(groupNgModel.valid).toBe(true);
      expect(groupNgModel.pristine).toBe(true);
      expect(groupNgModel.touched).toBe(false);

      // Dopo aver cambiato il valore programmaticamente, il controllo dovrebbe rimanere pristine
      // e untouched.
      radioInstances[1].checked = true;
      fixture.detectChanges();

      expect(groupNgModel.valid).toBe(true);
      expect(groupNgModel.pristine).toBe(true);
      expect(groupNgModel.touched).toBe(false);

      // Dopo l'interazione dell'utente, il controllo dovrebbe diventare dirty e touched.
      radioLabelElements[2].click();
      fixture.detectChanges();

      expect(groupNgModel.valid).toBe(true);
      expect(groupNgModel.pristine).toBe(false);
      expect(groupNgModel.touched).toBe(true);
    });

    it(`dovrebbe modificare il radio button basandosi sull'ngModel`, fakeAsync(() => {
      testComponent.modelValue = 'chocolate';

      fixture.detectChanges();
      tick();
      fixture.detectChanges();

      expect(innerRadios[1].nativeElement.checked).toBe(true);
      expect(radioInstances[1].checked).toBe(true);
    }));

    it(`dovrebbe aggiornare l'ngModel quando seleziono un radio button`, () => {
      radioLabelElements[1].click();
      fixture.detectChanges();
      expect(testComponent.modelValue).toBe('chocolate');
    });

    it(`dovrebbe aggiornare il modello prima di lanciare l'evento change`, () => {
      expect(testComponent.modelValue).toBeUndefined();
      expect(testComponent.lastEvent).toBeUndefined();

      radioLabelElements[1].click();
      fixture.detectChanges();
      expect(testComponent.lastEvent.value).toBe('chocolate');

      radioLabelElements[0].click();
      fixture.detectChanges();
      expect(testComponent.lastEvent.value).toBe('vanilla');
    });

  });

  describe('disabilitabile', () => {
    let fixture: ComponentFixture<DisableableRadioButton>;
    let radioInstance: RadioButtonComponent;
    let radioNativeElement: HTMLInputElement;
    let testComponent: DisableableRadioButton;

    beforeEach(() => {
      fixture = TestBed.createComponent(DisableableRadioButton);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;
      const radioDebugElement = fixture.debugElement.query(By.directive(RadioButtonComponent));
      radioInstance = radioDebugElement.injector.get<RadioButtonComponent>(RadioButtonComponent);
      radioNativeElement = radioDebugElement.nativeElement.querySelector('input');
    });

    it('dovrebbe modificare lo stato disabled', () => {
      expect(radioInstance.disabled).toBeFalsy();
      expect(radioNativeElement.disabled).toBeFalsy();

      testComponent.disabled = true;
      fixture.detectChanges();
      expect(radioInstance.disabled).toBeTruthy();
      expect(radioNativeElement.disabled).toBeTruthy();

      testComponent.disabled = false;
      fixture.detectChanges();
      expect(radioInstance.disabled).toBeFalsy();
      expect(radioNativeElement.disabled).toBeFalsy();
    });
  });

  describe('radio button standalone', () => {
    let fixture: ComponentFixture<StandaloneRadioButtons>;
    let radioDebugElements: DebugElement[];
    let seasonRadioInstances: RadioButtonComponent[];
    let weatherRadioInstances: RadioButtonComponent[];
    let fruitRadioNativeInputs: HTMLElement[];
    let testComponent: StandaloneRadioButtons;

    beforeEach(() => {
      fixture = TestBed.createComponent(StandaloneRadioButtons);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      radioDebugElements = fixture.debugElement.queryAll(By.directive(RadioButtonComponent));
      seasonRadioInstances = radioDebugElements
          .filter(debugEl => debugEl.componentInstance.name == 'season')
          .map(debugEl => debugEl.componentInstance);
      weatherRadioInstances = radioDebugElements
          .filter(debugEl => debugEl.componentInstance.name == 'weather')
          .map(debugEl => debugEl.componentInstance);

      const fruitRadioNativeElements = radioDebugElements
          .filter(debugEl => debugEl.componentInstance.name == 'fruit')
          .map(debugEl => debugEl.nativeElement);

      fruitRadioNativeInputs = [];
      for (const element of fruitRadioNativeElements) {
        fruitRadioNativeInputs.push(<HTMLElement> element.querySelector('input'));
      }
    });

    it('dovrebbe selezionare in maniera univoca i radio button a seconda dell\'attributo name', () => {
      seasonRadioInstances[0].checked = true;
      weatherRadioInstances[1].checked = true;

      fixture.detectChanges();
      expect(seasonRadioInstances[0].checked).toBe(true);
      expect(seasonRadioInstances[1].checked).toBe(false);
      expect(seasonRadioInstances[2].checked).toBe(false);
      expect(weatherRadioInstances[0].checked).toBe(false);
      expect(weatherRadioInstances[1].checked).toBe(true);
      expect(weatherRadioInstances[2].checked).toBe(false);

      seasonRadioInstances[1].checked = true;
      fixture.detectChanges();
      expect(seasonRadioInstances[0].checked).toBe(false);
      expect(seasonRadioInstances[1].checked).toBe(true);
      expect(seasonRadioInstances[2].checked).toBe(false);
      expect(weatherRadioInstances[0].checked).toBe(false);
      expect(weatherRadioInstances[1].checked).toBe(true);
      expect(weatherRadioInstances[2].checked).toBe(false);

      weatherRadioInstances[2].checked = true;
      expect(seasonRadioInstances[0].checked).toBe(false);
      expect(seasonRadioInstances[1].checked).toBe(true);
      expect(seasonRadioInstances[2].checked).toBe(false);
      expect(weatherRadioInstances[0].checked).toBe(false);
      expect(weatherRadioInstances[1].checked).toBe(false);
      expect(weatherRadioInstances[2].checked).toBe(true);
    });

    it('non dovrebbe aggiungere l\'attributo "name" se non viene passato', () => {
      const radio = fixture.debugElement.nativeElement.querySelector('#nameless input');
      expect(radio.hasAttribute('name')).toBe(false);
    });

  });

});
