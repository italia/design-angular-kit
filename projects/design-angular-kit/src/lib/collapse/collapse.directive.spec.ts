import { Component, DebugElement, ViewChild } from '@angular/core';
import { TestBed, fakeAsync, ComponentFixture, async, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItCollapseItemComponent } from './collapse-item.component';
import { ItCollapseGroupComponent } from './collapse-group.component';
import { ItCollapseDirective } from './collapse.directive';

/** Componente per testare una singola collapse. */
@Component({
  template: `
  <div itCollapse>
  </div>`
})
class SimpleCollapseComponent {}

/** Componente per testare una collapse con toggle. */
@Component({
  template: `
  <div [itCollapse]="isShown">
  </div>`
})
class ToggleCollapseComponent {
  isShown = false;
}

/** Componente per testare l'EventEmitter. */
@Component({
  template: `
  <button class="btn btn-primary" (click)="mioCollapse.toggle()"
    [attr.aria-expanded]="mioCollapse.isShown" aria-controls="collapseExample">
    Apri/chiudi contenuto
  </button>
  <div [itCollapse]="isShown" #mioCollapse="itCollapse"></div>
  `
})
class EmitterCollapseComponent {
  @ViewChild(ItCollapseDirective, /* TODO: add static flag */ {}) readonly directive: ItCollapseDirective;

  isShown = false;
}

/** Componente per testare il group e gli item di collapse. */
@Component({
  template: `
  <it-collapse-group [accordion]="accordion">
    <it-collapse-item *ngFor= "let item of items" [header]="item.header">
      {{item.content}}
    </it-collapse-item>
  </it-collapse-group>
  `
})
class GroupItemsCollapseComponent {
  accordion = false;

  items = [
    {
      'header': 'item-1',
      'content':
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n' +
        '3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
    },
    {
      'header': 'item-2',
      'content':
        'Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n' +
        'raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.'
    },
    {
      'header': 'item-3',
      'content':
        'Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n' +
        'sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n' +
        'Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
    },
  ];
}

describe('CollapseDirective', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItCollapseDirective,
        SimpleCollapseComponent,
        ToggleCollapseComponent,
        EmitterCollapseComponent,
      ]
    });

    TestBed.compileComponents();
  }));

  describe('comportamenti base', () => {
    let fixture: ComponentFixture<SimpleCollapseComponent>;
    let debugElement: DebugElement;
    let nativeElement: HTMLDivElement;

    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(SimpleCollapseComponent);
      fixture.detectChanges();

      debugElement = fixture.debugElement.query(By.directive(ItCollapseDirective));
      nativeElement = debugElement.nativeElement;
    }));

    it(`dovrebbe essere inizialmente chiuso`, () => {
      expect(nativeElement.classList).not.toContain('show');
    });

  });

  describe('comportamento con toggle', () => {
    let fixture: ComponentFixture<ToggleCollapseComponent>;
    let debugElement: DebugElement;
    let nativeElement: HTMLDivElement;
    let testComponent: ToggleCollapseComponent;

    beforeEach(waitForAsync(() => {
      fixture = TestBed.createComponent(ToggleCollapseComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      debugElement = fixture.debugElement.query(By.directive(ItCollapseDirective));
      nativeElement = debugElement.nativeElement;
    }));

    it(`dovrebbe effettuare il toggle dell'elemento div`, () => {
      testComponent.isShown = true;
      fixture.detectChanges();
      expect(nativeElement.classList).toContain('show');
      testComponent.isShown = false;
      fixture.detectChanges();
      expect(nativeElement.classList).not.toContain('show');
    });

  });

  describe('comportamento con emissione di eventi', () => {
    let fixture: ComponentFixture<EmitterCollapseComponent>;
    let debugElement: DebugElement;

    let nativeElement: HTMLDivElement;
    let btnElement: HTMLButtonElement;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(EmitterCollapseComponent);
      fixture.detectChanges();

      debugElement = fixture.debugElement.query(By.directive(ItCollapseDirective));
      nativeElement = fixture.nativeElement;
      btnElement = <HTMLButtonElement>nativeElement.querySelector('button');
    }));

    it(`dovrebbe emettere l'evento show`, () => {
      const ecComponent: EmitterCollapseComponent = fixture.debugElement.componentInstance;
      ecComponent.directive.shown.subscribe(eventHandler => {
          expect(eventHandler).toEqual(ecComponent.directive);
      });
      btnElement.click();
    });

    it(`dovrebbe emettere l'evento shown`, () => {
      const ecComponent: EmitterCollapseComponent = fixture.debugElement.componentInstance;
      ecComponent.directive.shown.subscribe(eventHandler => {
          expect(eventHandler).toEqual(ecComponent.directive);
      });
      btnElement.click();
    });

    it(`dovrebbe emettere l'evento hide`, () => {
      const ecComponent: EmitterCollapseComponent = fixture.debugElement.componentInstance;
      ecComponent.directive.hidden.subscribe(eventHandler => {
          expect(eventHandler).toEqual(ecComponent.directive);
      });
      btnElement.click();
    });

    it(`dovrebbe emettere l'evento hidden`, () => {
      const ecComponent: EmitterCollapseComponent = fixture.debugElement.componentInstance;
      ecComponent.directive.hidden.subscribe(eventHandler => {
          expect(eventHandler).toEqual(ecComponent.directive);
      });
      btnElement.click();
    });
  });
});

describe('CollapseGroupComponent & CollapseItemComponent', () => {

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItCollapseDirective,
        ItCollapseItemComponent,
        ItCollapseGroupComponent,
        GroupItemsCollapseComponent
      ]
    });

    TestBed.compileComponents();
  }));

  describe('comportamenti group base', () => {
    let fixture: ComponentFixture<GroupItemsCollapseComponent>;

    let itemDebugElements: DebugElement[];
    let itemComponentInstances: ItCollapseItemComponent[];
    let itemNativeElements: HTMLElement[];
    let itemButtonElements: HTMLButtonElement[];

    beforeEach(async(() => {
      fixture = TestBed.createComponent(GroupItemsCollapseComponent);
      fixture.detectChanges();

      itemDebugElements = fixture.debugElement.queryAll(By.directive(ItCollapseItemComponent));
      itemComponentInstances = itemDebugElements.map(itemDe => itemDe.componentInstance);
      itemNativeElements = itemDebugElements.map(itemDe => itemDe.nativeElement);
      itemButtonElements = itemNativeElements.map(itemNe => <HTMLButtonElement>itemNe.querySelector('button'));
    }));

    it(`i suoi elementi dovrebbero essere inizialmente chiusi`, () => {
      const noOfElements = itemNativeElements.length;
      const noOfHiddenElements = itemComponentInstances.reduce(
        (currentValue, instance) => currentValue + (!instance.directive.isShown ? 1 : 0), 0
      );

      expect(noOfElements).toEqual(noOfHiddenElements);
    });

    it(`comportamento con apertura di tutti i suoi elementi `, () => {
      const noOfElements = itemNativeElements.length;

      itemButtonElements.forEach(button => {
        button.click();
        fixture.detectChanges();
      });

      const noOfShownElements = itemComponentInstances.reduce(
        (currentValue, instance) => currentValue + (instance.directive.isShown ? 1 : 0), 0
      );

      expect(noOfElements).toEqual(noOfShownElements);
    });
  });

  describe('comportamenti group accordion', () => {
    let fixture: ComponentFixture<GroupItemsCollapseComponent>;
    let testComponent: GroupItemsCollapseComponent;

    let itemDebugElements: DebugElement[];
    let itemComponentInstances: ItCollapseItemComponent[];
    let itemNativeElements: HTMLElement[];
    let itemButtonElements: HTMLButtonElement[];

    beforeEach(async(() => {
      fixture = TestBed.createComponent(GroupItemsCollapseComponent);
      fixture.detectChanges();

      testComponent = fixture.debugElement.componentInstance;

      itemDebugElements = fixture.debugElement.queryAll(By.directive(ItCollapseItemComponent));
      itemComponentInstances = itemDebugElements.map(itemDe => itemDe.componentInstance);
      itemNativeElements = itemDebugElements.map(itemDe => itemDe.nativeElement);
      itemButtonElements = itemNativeElements.map(itemNe => <HTMLButtonElement>itemNe.querySelector('button'));
    }));

    it(`passaggio da group ad accordion`, () => {
      const noOfElements = itemNativeElements.length;

      itemButtonElements.forEach(button => {
        button.click();
        fixture.detectChanges();
      });

      let noOfShownElements = itemComponentInstances.reduce(
        (currentValue, instance) => currentValue + (instance.directive.isShown ? 1 : 0), 0
      );

      expect(noOfElements).toEqual(noOfShownElements);

      testComponent.accordion = true;
      fixture.detectChanges();

      itemButtonElements.forEach(button => {
        button.click();
        fixture.detectChanges();
      });

      noOfShownElements = itemComponentInstances.reduce(
        (currentValue, instance) => currentValue + (instance.directive.isShown ? 1 : 0), 0
      );

      expect(noOfShownElements).toEqual(1);
    });

    it(`comportamento di mutua esclusione`, () => {
      testComponent.accordion = true;
      fixture.detectChanges();

      itemButtonElements.forEach(button => {
        button.click();
        fixture.detectChanges();
      });

      const noOfShownElements = itemComponentInstances.reduce(
        (currentValue, instance) => currentValue + (instance.directive.isShown ? 1 : 0), 0
      );

      expect(noOfShownElements).toEqual(1);
    });

  });
});
